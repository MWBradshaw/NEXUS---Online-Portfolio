import styles from './WorkExperience.module.css';
import Slider from '../../components/Slider/Slider';
import slides from '../../slides.json'
// import { useState } from 'react';
// import placeholder from "../../assets/placeholder.jpg";

const WorkExperience = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };

    // const relevantCourseList = [['Fundamentals of Programming', 'A'], 
    // ['Discrete Mathematics', 'A'], 
    // ['Introduction to Object Oriented Programming', 'A'], 
    // ['Calculus', 'B'], 
    // ['Data Structures & Algorithms', 'B'], 
    // ['Computer Organization & Architecture', 'A'], 
    // ['Calculus II', 'A'],
    //  ['Computer Systems', 'A']]

    return (
        <div className={styles.container}>
            <section className={styles.one}>
                <Slider slides={slides}/>
            </section>

            
            <section className={styles.two}>
                <div className={styles.innerContainer2}>
                    <p>Java</p>
                    <p>Python</p>
                    <p>ReactJS</p>
                    <p>Typescript</p>
                    <p>Node.js</p>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                    <p>Bootstrap 5</p>
                    <p>Agile / Scrum</p>
                </div>
                <div className={styles.slideHeader2}>
                    <h2>Technical Skills</h2>
                </div>
            </section>
                

            <section className={styles.three}>
                <div className={styles.slideHeader3}>
                    <h2>Work Experience</h2>
                </div>
                <div className={styles.innerContainer}>
                    <div>
                        <div>
                            <p>DHAP Intern – SeKON Enterprise Inc.</p>
                            <p>January 2022 - Present</p>
                        </div>
                        <div>
                        <p>Developed a set of responsive website markups for the CDC’s new website’s HIV risk reduction tool using HTML, CSS,JavaScript, and Bootstrap 5 resulting in overall website traffic increasing by 17%.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Engineering Intern – Zoom Video Communications</p>
                            <p>September – December 2022</p>
                        </div>
                        <div>
                            <p>Engineered a product demo for a formula editor application for Zoom’s team chat with the use of React, Typescript, react-latex and guppy.js.</p>
                            <p>Conducted research on Zoom IQ, providing a detailed analysis of its overall functions, competitors, limitations, and recommended implementations which all was compiled on a Confluence page. From the recommended implementations,the overall user base for Zoom IQ had increased by 7%.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Software Engineer Intern – Lutron Electronics, Inc.</p>
                            <p>May – August 2022</p>
                        </div>
                        <div>
                            <p>Developed the user interface and functionality for Lutron Electronics’ mobile application’s new feature Integrator Logs, an activity component dedicated to showcasing the timestamps of the operation of lighting in a customer’s home for troubleshooting purposes, with the use of ReactJS, CSS3 and Bootstrap 5.</p>
                            <p>Implemented parsing fields for data taken from the cloud processor with the use of Typescript.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Teaching Assistant – Claflin University</p>
                            <p>March – May 2022</p>
                        </div>
                        <div>
                            <p>Assisted students with better understanding concepts in Fundamentals of Programming by actively helping them work through assignments individually. At the end of the semester, 7 students that requested assistance had improved their letter grades from B’s to A’s.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Temporary Bookseller – Claflin University Bookstore</p>
                            <p>December 2021 – January 2022</p>
                        </div>
                        <div>
                            <p>Assisted customers with book rental returns, locating store items, general inquiries, and retail transactions.</p>
                            <p>In addition to that, worked to process, package and organize book orders for students for the subsequent semester. At the end of the employment agreement, 1300 book orders were processed and packaged.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Orientation Leader – Claflin University</p>
                            <p>August 2021</p>
                        </div>
                        <div>
                            <p>Assisted with the facilitation of the new student orientation and move in activities for first year students of Claflin University. Aided incoming students with moving into their respective dorms while answering questions from parents and students alike about campus facilities.</p>
                            <p>In addition to that, coordinated a small group of 23 students and oversaw campus tours and informational sessions.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Research Intern - University of Pittsburgh’s Human Engineering Research Laboratories</p>
                            <p>June 2021 – July 2021</p>
                        </div>
                        <div>
                            <p>Worked with a team of engineers to develop an iteration of the Agile Life’s Patient Transfer System that could better transfer veterans and other from bed to wheelchair and vice versa.</p>
                            <p>Tasked with creating an ergonomic user interface for the Raspberry Pi that was used to operate the bed commands using the Python library tkinter.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WorkExperience;