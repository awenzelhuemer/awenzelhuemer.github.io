'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tech from "./components/tech";
import Timeline from "./components/timeline";
import './page.css'
import Image from 'next/image'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <div>
      <div className="general-container">
        <h1>Andreas Wenzelhuemer</h1>
        <p>Software Developer</p>

        <div className="profile-picture">
          <Image src="/awenzelhuemer.github.io/me.png" alt="Andreas Wenzelhuemer" className="profile-img" width={150} height={150} />
        </div>

        <div className="icons">
          <a href="https://github.com/awenzelhuemer" target="_blank" title="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/awenzelhuemer" target="_blank" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:andreas.wenzelhuemer@gmail.com" target="_blank" title="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <Tech />
      <Timeline />
    </div>
  );
}
