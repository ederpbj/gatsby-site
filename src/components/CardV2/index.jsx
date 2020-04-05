import React from "react";
import {Dropdown} from "react-bootstrap";

//import cardStyles from "./card.module.scss";

import * as Styled from './styled';
import Images from '../Images';

const CardV2 = (props) => {
    return (
        //<div class="card" style={{width: "18rem;"}}> 
        //<a href="#" class="btn btn-primary">Go somewhere</a>
        <Styled.CardV2Wrapper 
            className="card" 
            background={props.backgroundCard} 
            primary={props.styledDefault}
            > 
                <Images name={props.nameImage} />
            <div className="card-body">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text text-gatsby">{props.textCard}</p>
                <a href="#" className={`btn btn-${props.colorButton}`}>Go somewhere</a>
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Styled.CardV2Wrapper>
    )
}

export default CardV2