'use client'

import './timeline.css'

export default function Timeline() {
    return (
        <div className="timelines-group">
            <div className="timeline-container">
                <h2>Work Experience</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">04/2022 – 06/2022</div>
                        <div className="timeline-content">
                            <h3>Count IT, Hagenberg</h3>
                            <p>Full-time internship as part of the Software Engineering Bachelor program.
                                Contributed to a client project using <strong>Blazor</strong> (frontend) and <strong>Azure
                                    Functions</strong>
                                (backend).</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">05/2017 – 09/2019</div>
                        <div className="timeline-content">
                            <h3>Plasser & Theurer, Linz</h3>
                            <p>Software Developer in the internal IT department</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">04/2016 – 04/2017</div>
                        <div className="timeline-content">
                            <h3>Beko, Linz</h3>
                            <p>Software Developer for customer projects</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">07/2012, 07/2013, 07/2015</div>
                        <div className="timeline-content">
                            <h3>TMS, Linz</h3>
                            <p>Summer internship – Developed tools using VBA and Java</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="timeline-container">
                <h2>Education</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">09/2022 – 07/2024</div>
                        <div className="timeline-content">
                            <h3>FH OÖ, Campus Hagenberg</h3>
                            <p>MSc in Mobile Computing<br />Master thesis: Cellular Networks Performance in Three Dimensions - A
                                Drone-Based Approach</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">10/2019 – 07/2022</div>
                        <div className="timeline-content">
                            <h3>FH OÖ, Campus Hagenberg</h3>
                            <p>BSc in Software Engineering<br />Specialization: Web Engineering<br />Bachelor thesis: Micro-Frontends -
                                Frameworks and Concepts</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">2010 – 2015</div>
                        <div className="timeline-content">
                            <h3>HTBLA, Grieskirchen</h3>
                            <p>Reife- und Diplomprüfung<br />Specialization: Information and Organization</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}