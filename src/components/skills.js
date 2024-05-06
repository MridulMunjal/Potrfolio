import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { info } from "../info";


export default function Skills() {
    const firstName = info?.firstName?.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                about /{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span></p>
            <p style={{ color: info.baseColor }}> {firstName}</p>
            <ul className={Style.abutSkills}>
                {info.bio.map((itm, index) => <li key={index}>{itm}</li>)}
            </ul>

        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    return (
        <div className="flex flex-col items-center mt-12" id="about"> {/* Main container */}
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            {/* <Terminal text={miscText()}/> */}
        </div>
    )
}