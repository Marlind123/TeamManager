import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Nav=(props)=>{

    const{managePlayerStatus,managePlayer}=props

    

    return(
        <div >
            <Link to="/player/List" style={{paddingRight:"8px",marginRight:"8px",borderRight:"3px solid black",fontSize:"2em",fontWeight:managePlayer ?`bold`:"normal"}}>ManagePlayer</Link>
            <Link to="/status/game/1" style={{fontSize:"2em",fontWeight:managePlayer ? `normal`:"bold"}}>ManagePlayer</Link>

        </div>
    )
}

export default Nav