import React from "react";
import "./About.css";
import Title from "../Title/Title";
import Description from "./Description/Description";

const about = props=>(

    <div className="about">
        <div className="about-title">
        <Title title={props.title}/>
        </div>

        <div className="about-description">
        <Description desc={props.description}/>
        </div>
    </div>
);

export default about;
