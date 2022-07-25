import React from "react";
import TextoCentral from "../TextoCentral";

export default props => {
    const r = props.route
   const numero = r && r.params && r.params.numero ? r.params.numero: parseInt(Math.random() * 100) 
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C : {numero}
        </TextoCentral>
    )
}

