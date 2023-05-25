import styles from '../Projects/Projects.module.css';

const WorkExperience = () => {
    return (
        <div>
            <div>
                <div>
                    <h3>Relevant Courses</h3>
                </div>
            </div>

            <div>
                <div className="skillHeader">
                    <h3>Technical Skills</h3>
                </div>

                <div className="skillsMainBody">
                    <div className="skillsBar">
                        <div class="skillsInfo">
                            <p>HTML</p>
                            <p>%</p>
                        </div>

                        <div className="bar">
                            <span class="html"></span>
                        </div>
                    </div>

                    <div className="skillsBar">
                        <div class="skillsInfo">
                            <p>CSS3</p>
                            <p>90%</p>
                        </div>

                        <div className="bar">
                            <span class="css"></span>
                        </div>
                    </div>

                    <div className="skillsBar">
                        <div class="skillsInfo">
                            <p>JavaScript</p>
                            <p>%</p>
                        </div>

                        <div className="bar">
                            <span class="javascript"></span>
                        </div>
                    </div>

                    <div className="skillsBar">
                        <div class="skillsInfo">
                            <p>ReactJS</p>
                            <p>%</p>
                        </div>

                        <div className="bar">
                            <span class="react"></span>
                        </div>
                    </div>

                    <div className="skillsBar">
                        <div class="skillsInfo">
                            <p>Bootstrap 5</p>
                            <p>%</p>
                        </div>

                        <div className="bar">
                            <span class="bootstrap"></span>
                        </div>
                    </div>

                    <div className="skillsBar">
                        <div class="skillsInfo">
                            <p>Python</p>
                            <p>%</p>
                        </div>

                        <div className="bar">
                            <span class="python"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h3>Work Experience</h3>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;