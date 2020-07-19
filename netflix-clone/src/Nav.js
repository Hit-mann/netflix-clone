import React,{useEffect,useState} from 'react'
import './Nav.css'

function Nav() {
    const [show,handleShow] =useState(false);

    useEffect(() => {
        window.addEventListener("scroll" ,()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
          <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"/>
          <img 
          className="nav_avatar"
          src="https://i.pinimg.com/236x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" />
        </div>
    )
}

export default Nav
