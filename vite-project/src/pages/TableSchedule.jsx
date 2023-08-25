import React from 'react';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Button from '@mui/material/Button';

const supabase = createClient("https://cythikxqaebbgntxzokp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5dGhpa3hxYWViYmdudHh6b2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4OTQ4MDksImV4cCI6MjAwODQ3MDgwOX0.hZU2Ycus9mpt2MzkGGACaHAGIAJi96nfpQ4m_-MkpFs");

function TableSchedule() {
        const [gymClasses, setGymClasses] = useState([]);

        useEffect(() => { getGymClasses();
            const channel = supabase
                .channel("gymClasses")
                .on(
                    'postgres_changes',
                    {
                        event: 'UPDATE',
                        schema: 'public',
                    },
                    payload => {
                    console.log("Subscription update:", payload);
                    getGymClasses();
                })
                .subscribe();

            return () => {
                channel.unsubscribe();
            };
        }, []);

        async function getGymClasses() {
            const { data } = await supabase.from("gymClasses").select();
            setGymClasses(data);
        }

        return <div>
            <h2 style={{ textAlign: "center", padding:'10px'}}><strong>Zajęcia Grupowe</strong></h2>
            <ul style={{ listStyle: "none"}}>
                <li
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #ccc",
                        padding: "15px 0",
                        fontWeight: "bold",
                    }}
                >
                    <div style={{flex:1, padding: '10px' }}>Zajęcia</div>
                    <div style={{ flex: 1 }}>Czas</div>
                    <div style={{ flex: 1 }}>Dla kogo</div>
                    <div style={{ flex: 1 }}>Cel</div>
                    <div style={{ flex: 1}} >Zapisanych osób</div>
                    <div style={{ flex: 1 }} >Wolnych miejsc</div>
                    <div style={{ flex: 1 }} >Zarezerwuj miejsce</div>

                </li>
                {gymClasses.map(gymClass => <li
                        key={gymClass.name}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: "1px solid #ccc",
                            padding: "10px 0",
                        }}>
                        <div style={{flex: 1 }}>{gymClass.name}</div>
                        <div style={{ flex: 1 }}>{gymClass.time}</div>
                        <div style={{ flex: 1 }}>{gymClass.who}</div>
                        <div style={{ flex: 1 }}>{gymClass.goal}</div>
                        <div style={{ flex: 1, textAlign:'center'  }}>{gymClass.participants}</div>
                        <div style={{ flex: 1, textAlign:'center'  }}>
                            {Math.max(gymClass.total_places - gymClass.participants, 0)}
                        </div>
                        <div style={{ flex: 1 }} >{gymClass.signed_up}
                            <Button variant="outlined" className='btn-cta-home'>Zapisuję się!</Button>
                        </div>

                    </li>)}
            </ul>
        </div>;
    }

export default TableSchedule;











