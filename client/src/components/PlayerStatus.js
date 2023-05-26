import React, { useEffect,useState } from "react"
import axios from "axios"
import Nav2 from "./Nav2"

const PlayerStatus=(props)=>{
    const {setModel,model, managePlayer ,setManagePayer}=props
    const [gameActive,setGameActive]=useState(0)




    useEffect(() => {
        setManagePayer(false)
        axios.get("http://localhost:8000/player")
            .then((res) => {
                setModel(res.data.list)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [model])


    const onButtonClick=(id,action)=>{
        const data={}
        if(gameActive===0){
            data.GameOne=action
        }
        else if(gameActive===1){
            data.GameTwo=action
        }
        else{
            data.GameThree=action
        }
        axios.put("http://localhost:8000/player/"+id,data)
        .then((res)=>{
            console.log(res)
           }
        )
        .catch((err)=>console.log(err))

    }

    

    
    return(
        <div className="bg-white container-sm  m-4 p-4" style={{backgroundColor:"white"}}>
            <h1>Player Status - Game 1</h1>
            <Nav2 gameActive={gameActive} setGameActive={setGameActive} />
           { gameActive===0 &&
            <table class="table table-striped table-bordered  col ">
                <thead>
                    <tr className="table-secondary">
                        <th  scope="col">Team Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(model).length > 0 && model.map((item, id) => (
                        <tr key={id}>
                            <td>{item.PlayerName}</td>
                            <td className="d-flex justify-content-around">
                                <button type="button" class={`btn btn-outline-success ${item.GameOne==="Playing" ? "active":""} `  } onClick={()=>onButtonClick(item._id,"Playing")}  >Playing</button>
                                <button type="button" class={`btn btn-outline-danger ${item.GameOne==="Not playing" ? "active":""}  `} onClick={()=>onButtonClick(item._id,"Not playing")} >Not Playing</button>
                                <button type="button" class={`btn btn-outline-warning ${item.GameOne==="Undecided" ? "active":""} `} onClick={()=>onButtonClick(item._id,"Undecided")} >Undecided</button>
                                 </td>
                        </tr>
                    ))}


                </tbody>
            </table>}

            { gameActive===1 &&
            <table class="table table-striped table-bordered  col ">
                <thead>
                    <tr className="table-secondary">
                        <th  scope="col">Team Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(model).length > 0 && model.map((item, id) => (
                        <tr key={id}>
                            <td>{item.PlayerName}</td>
                            <td className="d-flex justify-content-around">
                                <button type="button" class={`btn btn-outline-success ${item.GameTwo==="Playing" ? "active":""} `  } onClick={()=>onButtonClick(item._id,"Playing")}  >Playing</button>
                                <button type="button" class={`btn btn-outline-danger ${item.GameTwo==="Not playing" ? "active":""}  `} onClick={()=>onButtonClick(item._id,"Not playing")} >Not Playing</button>
                                <button type="button" class={`btn btn-outline-warning ${item.GameTwo==="Undecided" ? "active":""} `} onClick={()=>onButtonClick(item._id,"Undecided")} >Undecided</button>
                                 </td>
                        </tr>
                    ))}


                </tbody>
            </table>}
            { gameActive===2 &&
            <table class="table table-striped table-bordered  col ">
                <thead>
                    <tr className="table-secondary">
                        <th  scope="col">Team Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(model).length > 0 && model.map((item, id) => (
                        <tr key={id}>
                            <td>{item.PlayerName}</td>
                            <td className="d-flex justify-content-around">
                                <button type="button" class={`btn btn-outline-success ${item.GameThree==="Playing" ? "active":""} `  } onClick={()=>onButtonClick(item._id,"Playing")}  >Playing</button>
                                <button type="button" class={`btn btn-outline-danger ${item.GameThree==="Not playing" ? "active":""}  `} onClick={()=>onButtonClick(item._id,"Not playing")} >Not Playing</button>
                                <button type="button" class={`btn btn-outline-warning ${item.GameThree==="Undecided" ? "active":""} `} onClick={()=>onButtonClick(item._id,"Undecided")} >Undecided</button>
                                 </td>
                        </tr>
                    ))}


                </tbody>
            </table>}

        </div>
    )
}

export default PlayerStatus;