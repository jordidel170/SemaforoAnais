import React, { useState, useEffect } from "react";
import App from "./app";
import background from "./mates.jpg"

const TrafficLights = () => {
    const [selected, setSelected] = useState("yellow");
    const [active, setActive] = useState(false);
    const [aciertos, setAciertos] = useState(0);
    const [fallos, setFallos] = useState(0);

    const changeColor = (color) => {
        setSelected(color);
    };

    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                if (selected === "red") {
                    setSelected("green");
                    setTimeout(() => setSelected("yellow"), 1000);
                } else if (selected === "green") {
                    setSelected("red");
                    setTimeout(() => setSelected("yellow"), 1000);
                }
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [active, selected]);

    const setGreen = () => {
        setSelected("green");
        setTimeout(() => setSelected("yellow"), 1000);
        setAciertos(aciertos + 1);
    };

    const setRed = () => {
        setSelected("red");
        setTimeout(() => setSelected("yellow"), 1000);
        setFallos(fallos + 1);
    };

    return (
        <main>
            <div style={{ backgroundImage: `url(${background})` }} className="fondo">
            <div className="titulo"><h1>&#10026; Matemáticas para Anaïs &#10026;</h1></div>
            <div  className="principal">
                <div className="box-light">
                    <div
                        className={`red ${selected === "red" ? "light-on" : ""}`}
                        onClick={() => changeColor("red")}
                    >
                        {fallos > 0 && fallos}
                    </div>
                    <div
                        className={`yellow ${selected === "yellow" ? "light-on" : ""}`}
                        onClick={() => changeColor("yellow")}
                    ></div>
                    <div
                        className={`green ${selected === "green" ? "light-on" : ""}`}
                        onClick={() => changeColor("green")}
                    >
                        {aciertos > 0 && aciertos}
                    </div>
                    
                </div>
                <App setGreen={setGreen} setRed={setRed} />
            </div>
            </div>
        </main>
    );
};

export default TrafficLights;


