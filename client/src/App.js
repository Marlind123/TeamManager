import React,{useState} from "react";
import AddPlayer from "./components/AddPlayer";
import PlayerList from "./components/PlayerList";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from "./components/Nav";
import "./App.css"
import PlayerStatus from "./components/PlayerStatus";
const App=()=> {
  const [model,setModel]=useState([])
  const [managePlayer, setManagePayer]=useState(true)
  const [listPlayerActive,setListPlayerActive]=useState(true)
  return (
    <div>
      <BrowserRouter>
      <Nav managePlayer={managePlayer} setManagePayer={setManagePayer}  />
      <Routes>
        <Route path="/player/addPlayer" element={<AddPlayer 
        model={model} 
        setModel={setModel}
        listPlayerActive={listPlayerActive}
        setListPlayerActive={setListPlayerActive}
        managePlayer={managePlayer} setManagePayer={setManagePayer}
         />} />
        <Route path="player/List" element={ <PlayerList 
        model={model} 
        setModel={setModel}
        listPlayerActive={listPlayerActive}
        setListPlayerActive={setListPlayerActive}
        managePlayer={managePlayer} setManagePayer={setManagePayer}
        />} />
        <Route path="/status/game/:gameId" element={<PlayerStatus  managePlayer={managePlayer} setManagePayer={setManagePayer} model={model} setModel={setModel} />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
