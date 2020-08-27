import React,{useEffect} from 'react';
import './navBarContents.css'
import {Link} from 'react-router-dom'
import Parallax from 'parallax-js'
import Laptop from '../../images/laptop.png'
import Rocket from '../../images/rocket.png'
import Data from '../../images/data.png'

const NavBarContents = ({setIsNav})=>{
    let scene;
    useEffect(()=>{
        let parallaxInstance = new Parallax(scene, {pointerEvents: true});
    },[scene])
    return(
        <div className="navBarContent" ref={el => scene = el}>
            <div data-depth=".2">
            <Link to="/projects" onClick={()=>{setIsNav(false)}}>PROJECTS</Link>
            <Link to="/skills" onClick={()=>{setIsNav(false)}}>SKILLS</Link>
            <Link to="/contact" onClick={()=>{setIsNav(false)}}>CONTACT ME</Link>
            </div>
            <img src={Laptop} data-depth=".6" id="laptop" alt=""/>
            <img src={Rocket} data-depth=".4" id="rocket" alt=""/>
            <img src={Data} data-depth=".3" id="data" alt=""/>

        </div>
    )
}

export default NavBarContents;