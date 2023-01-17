import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

function Grettings(){
    return <h1>Hola Mundo</h1>
}

root.render(Grettings())