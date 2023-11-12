import { useState, useEffect } from "react";

export default function Home(){
    const [pin, setPin] = useState(0);
    useEffect(() => {
        async function fetchData(){
        }
    });
    return(
        <div id="home">
            <h1>Home</h1>
            <input type="textbox" id="pin"></input>
            
        </div>
    );
}