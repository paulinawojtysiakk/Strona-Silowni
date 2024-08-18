import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Button from "@mui/material/Button";

const supabase = createClient(
  "https://cythikxqaebbgntxzokp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5dGhpa3hxYWViYmdudHh6b2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4OTQ4MDksImV4cCI6MjAwODQ3MDgwOX0.hZU2Ycus9mpt2MzkGGACaHAGIAJi96nfpQ4m_-MkpFs",
);

function TableSchedule() {
  const [gymClasses, setGymClasses] = useState([]);
  const [showAlert, setShowAlert] = useState(false); //poinformowanie użytkownika o pełnej grupie

  useEffect(() => {
    getGymClasses();
    const channel = supabase //ustawienie subskrybcji i updateu z bazy
      .channel("gymClasses")
      .on(
        "postgres_changes",
        {
          event: "UPDATE", //wybór odpowiedniego eventu z supabase
          schema: "public",
        },
        (payload) => {
          console.log("Subscription update:", payload);
          getGymClasses();
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe(); //funkcja czyści i anuluje subskrypcje channel
    };
  }, []);

  async function getGymClasses() {
    //metoda from do zaciągnięcia gymClasses
    const { data, error } = await supabase.from("gymClasses").select();
    if (error) {
      console.error("Error getting gym classes", error.message);
    } else {
      setGymClasses(data); //jeśli nie ma błedu, zrob update
    }
  }

  async function signUpForClass(classId) {
    const targetClass = gymClasses.find((item) => item.id === classId); //znajdź zajęcia po id
    const updatedParticipants = targetClass.participants + 1; // Inkrementacja

    if (targetClass.total_places < updatedParticipants) {
      //Jeśli zajęcia są pełne, zwróc error i pokaż komunikat
      console.log("class is fully booked");
      setShowAlert(true);
    } else {
      //jeśli są miejsca, zrób update bazy
      const { data: gymClass, error } = await supabase
        .from("gymClasses")
        .update({
          signed_up: true,
          participants: updatedParticipants,
        })
        .eq("id", classId) //znajdź match id i classid w bazie
        .single();

      if (error) {
        console.error("Error signing up", error.message);
      } else {
        console.log("Signed up successfully");
        const updatedClasses = gymClasses.map(
          (
            item, //zmapuj zaktualizaowane zajęcia
          ) => (item.id === gymClass.id ? gymClass : item), //porównaj id z signupu do id w bazie i update
        );
        setGymClasses(updatedClasses);
      }
    }
  }

  async function cancelSignUpForClass(classId) {
    const targetClass = gymClasses.find((item) => item.id === classId);
    const updatedParticipants = Math.max(targetClass.participants - 1, 0); // Dekrementacja

    const { data: gymClass, error } = await supabase
      .from("gymClasses")
      .update({
        signed_up: false,
        participants: updatedParticipants,
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
    <div>
      <h2 style={{ textAlign: "center", padding: "30px", fontSize: "20px" }}>
        <strong>Zajęcia Grupowe</strong>
      </h2>
      <ul style={{ listStyle: "none" }}>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "3px solid #ccc",
            borderTop: "3px solid #ccc",
            padding: "40px 0",
            textAlign: "center",
          }}
        >
          <div style={{ flex: 1 }}>Zajęcia</div>
          <div style={{ flex: 1 }}>Kiedy</div>
          <div style={{ flex: 1 }}>Czas</div>
          <div style={{ flex: 1 }}>Dla kogo</div>
          <div style={{ flex: 1 }}>Cel</div>
          <div style={{ flex: 1 }}>Zapisanych osób</div>
          <div style={{ flex: 1 }}>Wolnych miejsc</div>
          <div style={{ flex: 1 }}>Zarezerwuj miejsce</div>
        </li>
        {gymClasses.map((gymClass) => (
          <li
            key={gymClass.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              padding: "15px 0",
            }}
          >
            <div style={{ flex: 1, fontSize: "16px", fontWeight: "bold" }}>
              {gymClass.name}
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>{gymClass.when}</div>
            <div style={{ flex: 1, textAlign: "center" }}>
              {gymClass.time} min
            </div>
            <div style={{ flex: 1 }}>{gymClass.who}</div>
            <div style={{ flex: 1 }}>{gymClass.goal}</div>
            <div style={{ flex: 1, textAlign: "center" }}>
              {gymClass.participants}
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              {Math.max(gymClass.total_places - gymClass.participants, 0)}
            </div>
            <div>
              {gymClass.signed_up ? (
                <div>
                  <div style={{ maxWidth: "130px", paddingBottom: "10px" }}>
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
                <Button
                  variant="outlined"
                  onClick={() => signUpForClass(gymClass.id)}
                >
                  Zapisuję się!
                </Button>
              )}
            </div>

            {showAlert && ( // Komunikat o pełnej grupie
              <div className="alert">
                Niestety, wszystkie miejsca są zajęte. Możesz umówić się
                telefonicznie na kolejną sesję!
                <Button onClick={() => setShowAlert(false)}>Zamknij</Button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableSchedule;
