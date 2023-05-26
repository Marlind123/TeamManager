import React, { useEffect, useState } from "react";
import axios from "axios"
import Nav1 from "./Nav1";
const PlayerList = (props) => {
    const { model, setModel,listPlayerActive,setListPlayerActive, managePlayer ,setManagePayer } = props

    
    
    useEffect(() => {
        setListPlayerActive(true)
        setManagePayer(true)
        axios.get("http://localhost:8000/player")
            .then((res) => {
                setModel(res.data.list)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const onDeleteClick=(index)=>{
        
        axios.delete("http://localhost:8000/player/"+index)
        .then((res)=>{
            const newArray=model.filter((item)=>item._id!==index)
        setModel(newArray)
        })
        .catch((err)=>console.log(err))

    }

    console.log(model)
    return (
        <div className="bg-white container-sm  m-4 p-4" style={{backgroundColor:"white"}}>
            <Nav1  listPlayerActive={listPlayerActive} />
            <table class="table table-striped table-bordered  col ">
                <thead>
                    <tr className="table-secondary">
                        <th  scope="col">Team Name</th>
                        <th scope="col">Prefered Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(model).length > 0 && model.map((item, id) => (
                        <tr key={id}>
                           
                            <td>{item.PlayerName}</td>
                            <td>{item.Position}</td>
                            <td><button onClick={()=>onDeleteClick(item._id)} class="btn btn-danger">Delete</button> </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default PlayerList;