import React from "react";

//import cardStyles from "./card.module.scss";

const CardV2 = (props) => {
    return (
        //<div class="card" style={{width: "18rem;"}}> 
        //<a href="#" class="btn btn-primary">Go somewhere</a>
        <div class="card" > 
            <div class="card-body">
                <h5 class="card-title">{props.titleCard}</h5>
                <p class="card-text">{props.textCard}</p>
                <a href="#" class={`btn btn-${props.colorButton}`}>Go somewhere</a>
            </div>
        </div>
    )
}

export default CardV2