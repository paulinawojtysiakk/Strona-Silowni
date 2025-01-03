import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Button from "@mui/material/Button";
import '/src/scss/TableSchedule.scss';

const supabase = createClient(
  "https://cythikxqaebbgntxzokp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5dGhpa3hxYWViYmdudHh6b2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4OTQ4MDksImV4cCI6MjAwODQ3MDgwOX0.hZU2Ycus9mpt2MzkGGACaHAGIAJi96nfpQ4m_-MkpFs",
);

function TableSchedule() {
  const [gymClasses, setGymClasses] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedClassId, setSelectedClassId] = useState(null);

  useEffect(() => {
    getGymClasses();
    const channel = supabase 
      .channel("gymClasses")
      .on(
        "postgres_changes",
        {
          event: "UPDATE", 
          schema: "public",
        },
        (payload) => {
          console.log("Subscription update:", payload);
          getGymClasses();
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe(); 
    };
  }, []);

  async function getGymClasses() {
    const { data, error } = await supabase.from("gymClasses").select();
    if (error) {
      console.error("Error getting gym classes", error.message);
    } else {
      setGymClasses(data); 
    }
  }

  async function signUpForClass(classId) {
    const targetClass = gymClasses.find((item) => item.id === classId); 
    const updatedParticipants = targetClass.participants + 1; 

    if (targetClass.total_places < updatedParticipants) {
      console.log("class is fully booked");
      setShowAlert(true);
    } else {
      const { data: gymClass, error } = await supabase
        .from("gymClasses")
        .update({
          signed_up: true,
          participants: updatedParticipants,
          user_name: userName,
        })
        .eq("id", classId) 
        .single();

      if (error) {
        console.error("Error signing up", error.message);
      } else {
        console.log("Signed up successfully");
        const updatedClasses = gymClasses.map(
          (
            item,
          ) => (item.id === gymClass.id ? gymClass : item), 
        );
        setGymClasses(updatedClasses);
        setUserName("");
      }
    }
  }

  async function cancelSignUpForClass(classId) {
    const targetClass = gymClasses.find((item) => item.id === classId);
    const updatedParticipants = Math.max(targetClass.participants - 1, 0); 

    const { data: gymClass, error } = await supabase
      .from("gymClasses")
      .update({
        signed_up: false,
        participants: updatedParticipants,
        user_name: null,
      })
      .eq("id", classId)
      .single();

    if (error) {
      console.error("Error canceling sign-up", error.message);
    } else {
      console.log("Sign-up canceled");
      const updatedClasses = gymClasses.map((item) =>
        item.id === gymClass.id ? gymClass : item,
      );
      setGymClasses(updatedClasses);
    }
  }

  return (
    <div className="classes-table-schedule">
      <h2 className="schedule-title">
        <strong>Zajęcia Grupowe</strong>
      </h2>
      <ul >
        <li className="schedule-single-title">
          <div className="schedule-column schedule-column-name" >Zajęcia</div>
          <div  className="schedule-column schedule-column-when" >Kiedy</div>
          <div className="schedule-column schedule-column-time"  >Czas</div>
          <div className="schedule-column schedule-column-level"  >Poziom</div>
          <div  className="schedule-column schedule-column-goal" >Cel zajęć</div>
          <div  className="schedule-column schedule-column-participants" >Zapisanych osób</div>
          <div className="schedule-column schedule-column-available" >Wolnych miejsc</div>
          <div  className="schedule-column schedule-column-reserve" >Zarezerwuj miejsce</div>
        </li>
        {gymClasses.map((gymClass) => (
          <li
            key={gymClass.id} className="schedule-class-details"  >
           <div className="schedule-column schedule-column-name  schedule-single-class-title">{gymClass.name}</div>
            <div className="schedule-column schedule-column-when">{gymClass.when}</div>
            <div className="schedule-column schedule-column-time">{gymClass.time} min</div>
            <div className="schedule-column schedule-column-level">{gymClass.who}</div>
            <div className="schedule-column schedule-column-goal">{gymClass.goal}</div>
            <div className="schedule-column schedule-column-participants">{gymClass.participants}</div>
            <div className="schedule-column schedule-column-available">
              {Math.max(gymClass.total_places - gymClass.participants, 0)}
            </div>
            <div className="schedule-column schedule-column-reserve">
              {gymClass.signed_up ? (
                <div className="reserved-box">
                  <div className="reserved-info">
                    Twoje miejsce zostało zarezerwowane
                  </div>
                  <Button
                    variant="outlined"
                    onClick={() => cancelSignUpForClass(gymClass.id)}
                  >
                    Anuluj
                  </Button>
                </div>
              ) : (
                <div>
                  <input 
                  type="text"
                  placeholder="Podaj swoje imię"
                  value={selectedClassId === gymClass.id ? userName: ""}
                  onChange={(e) => setUserName(e.target.value)}
                  onFocus={() => setSelectedClassId(gymClass.id)}
                  style={{ padding:"5px", marginBottom:"5px", textAlign:"center", border:"1px solid lightgrey", borderRadius:"5px"}}
                  className="nameInput"
                  />
                <Button
                  variant="outlined"
                  onClick={() => signUpForClass(gymClass.id)}
                  disabled={!userName || selectedClassId !== gymClass.id} 
                >
                  Zapisuję się!
                </Button>
                </div>

              )}
            </div>

            {showAlert && ( 
              <div className="alert">
                Niestety, wszystkie miejsca są zajęte. Możesz umówić się
                telefonicznie na kolejną sesję!
                <Button variant="outlined" onClick={() => setShowAlert(false)}>Zamknij</Button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

}


export default TableSchedule;
