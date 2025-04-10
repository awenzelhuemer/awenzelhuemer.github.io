'use client'

import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './tech.css'

export default function Tech() {
    return <div>
        <h2>Tech Stack</h2>
        <div className="tech-stack">
            <div className="tech"><FontAwesomeIcon icon={faAngular} style={{color: "#dd0031"}} />Angular</div>
            <div className="tech"><FontAwesomeIcon icon={faAngular} style={{color: "#61dafb"}} /> React</div>
            <div className="tech"><FontAwesomeIcon icon={faAngular} style={{color: "#512bd4"}} /> .NET</div>
            <div className="tech"><FontAwesomeIcon icon={faAngular} style={{color: "#f89820"}} /> Java</div>
            <div className="tech"><FontAwesomeIcon icon={faAngular} style={{color: "#3ddc84"}} /> Android</div>
            <div className="tech"><FontAwesomeIcon icon={faAngular} style={{color: "#e34c26"}} /> HTML</div>
            <div className="tech"><FontAwesomeIcon icon={faAngular} style={{color: "#f7df1e"}} /> JavaScript</div>
            <div className="tech"><FontAwesomeIcon icon={faAngular} style={{color: "#3178c6"}} /> TypeScript</div>
        </div>
    </div>
}