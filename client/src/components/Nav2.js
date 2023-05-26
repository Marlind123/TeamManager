import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Nav2=(props)=>{

    const {setGameActive,gameActive,managePlayerStatus}=props
    

    return(
        <div className="m-4">
            <Link to={"/status/game/1"} onClick={()=>setGameActive(0)} style={{paddingRight:"8px",marginRight:"8px",borderRight:"3px solid black",fontSize:"1.875em",fontWeight:gameActive===0 ?`bold`:"normal"}}>Game 1</Link>
            <Link to={"/status/game/2" } onClick={()=>setGameActive(1)} style={{paddingRight:"8px",marginRight:"8px",borderRight:"3px solid black",fontSize:"1.875em",fontWeight:gameActive===1 ?`bold`:"normal"}}>Game 2</Link>
            <Link to={"/status/game/3"} onClick={()=>setGameActive(2)} style={{fontSize:"1.875em",fontWeight:gameActive===2 ?`bold`:"normal"}}>Game 3</Link>

        </div>
    )
}

export default Nav2;