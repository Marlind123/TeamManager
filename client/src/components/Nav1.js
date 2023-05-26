import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Nav1=(props)=>{

    const {listPlayerActive}=props
    

    return(
        <div className="m-4">
            <Link to={"/player/List"} style={{paddingRight:"8px",marginRight:"8px",borderRight:"3px solid black",fontSize:"1.875em",fontWeight:listPlayerActive ?`bold`:"normal"}}>List</Link>
            <Link to={"/player/addPlayer"} style={{fontSize:"1.875em",fontWeight:listPlayerActive ?`normal`:"bold"}}>Add Player</Link>
        </div>
    )
}

export default Nav1;