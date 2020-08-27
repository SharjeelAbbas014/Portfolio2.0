import React, {useState} from 'react';
import MyProjects from './projectList'
import './Project.css'

const Projects = ()=>{
    const [skill, setSkill] =useState({
        data: false,
        python: false,
        fullStack: false,
        react: false
    });
    const [projects, setProjects] = useState(MyProjects);
    const updateSkills =(data)=>{
        if(data === 'data'){
            skill.data===false?setSkill({...skill, data: true}):setSkill({...skill, data: false});
        }
        if(data === 'python'){
            skill.python===false?setSkill({...skill, python: true}):setSkill({...skill, python: false});
        }
        if(data === 'react'){
            skill.react===false?setSkill({...skill, react: true}):setSkill({...skill, react: false});
        }
        if(data === 'fullStack'){
            skill.fullStack===false?setSkill({...skill, fullStack: true}):setSkill({...skill, fullStack: false});
        }
    }
    return(
        <div className="projects">
            <h2>PROJECTS</h2>
            <div className="selection">
            <button id={skill.data === true ? "activeSkill":""} onClick={()=>{updateSkills('data')}}>Data Science</button>
            <button id={skill.python === true ? "activeSkill":""} onClick={()=>{updateSkills('python')}}>Python</button>
            <button id={skill.fullStack === true ? "activeSkill":""} onClick={()=>{updateSkills('fullStack')}}>Full Stack Web</button>
            <button id={skill.react === true ? "activeSkill":""} onClick={()=>{updateSkills('react')}}>React</button>
            </div>
            <div id="projectBox">
                {
                    projects.map(proj=>(
                        <div className="singleProject">
                        <h3>{proj.name}</h3>
                        <p>{proj.subtitle}</p>
                        <a href="#" className="visitButton">Visit</a>
                        <a href="#">😁</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;