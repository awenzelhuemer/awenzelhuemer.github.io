'use client'

import Tech from "./components/tech";
import Timeline from "./components/timeline";
import './page.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="general-container">
        <h1>Andreas Wenzelhuemer</h1>
        <p>Software Developer</p>

        <div className="profile-picture">
          <Image src="https://awenzelhuemer.github.io/me.png" alt="Andreas Wenzelhuemer" className="profile-img" width={150} height={150} />
        </div>

        <div className="icons">
          <a href="https://github.com/awenzelhuemer" target="_blank" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/awenzelhuemer" target="_blank" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:andreas.wenzelhuemer@gmail.com" target="_blank" title="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
      <Tech />
      <Timeline />
    </div>
  );
}
