import React, { useState, useEffect } from "react";
import axios from "axios"
import Nav1 from "./Nav1";
import { useNavigate } from "react-router-dom";
const AddPlayer = (props) => {
    const { model, setModel, listPlayerActive, setListPlayerActive,managePlayer ,setManagePayer } = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [err, setErr] = useState([])

    const [disable, setDisable] = useState(null)
    const navigate=useNavigate()
    useEffect(() => {
        setListPlayerActive(false)
        setManagePayer(true)
    })

    useEffect(()=>{
        if(name.length<3 && err.length != 0 ){
            setDisable(true)
        }
        else{
            setDisable(false)
        }
    },[name,err])

    

    const onFormSubmit = (e) => {
        
        e.preventDefault()
        axios.post("http://localhost:8000/player", {
            PlayerName: name,
            Position: position
        })
            .then((res) => {
                setModel([...model, res.data.list])
                setName("")
                setPosition("")
                navigate("/player/List")
                setErr([])
            })
            .catch((err) => {
                setErr(err.response.data.errors)
                
            })

    }
    console.log(disable)


    return (
        <div className="bg-white  container-sm  m-4 p-4 ">
            <Nav1 listPlayerActive={listPlayerActive} />
            <div className="border border-3 border-secondary w-75">
                <form onSubmit={onFormSubmit} className="forms mb-5 w-50 m-4">
                    <div className="row mb-3 ">
                        <label >Name</label>
                        <input className="form-control text-bg-light p-2 " value={name} onChange={(e) => setName(e.target.value)} type="text" id="firstName"></input>
                        {(name.length == 0 || name.length > 2) ? "" : err.length != 0 ? <span style={{ color: "red" }}>{err.PlayerName.message}</span> :"" }
                    </div>
                    <div className="row mb-3">
                        <label >Position</label>
                        <input value={position} onChange={(e) => setPosition(e.target.value)} className="form-control text-bg-light p-2 " type="text" id="lastName"></input>
                    </div>
                    <button className="btn btn-lg btn-primary col-3  gap-2 " disabled={disable} >Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddPlayer;