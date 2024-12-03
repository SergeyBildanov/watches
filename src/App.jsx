import './App.css'
import { useState } from 'react'
import WatchesForm from './components/watchesForn'
import Watches from './components/Watches'



function App() {
  const [clocksArray, addClock] = useState([])
  const [error, setError] = useState("");
  const submitHandler = e => {
    e.preventDefault();
    const elements = e.target.elements;
    const name = elements.name.value
    const zone= elements.zone.value;
   if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(zone.slice(1, zone.length))){
    setError("Некорректный ввод временной зоны. Введите смещение в формате ±ЧЧ:ММ")
    return;
   }
   else{
    setError("");
    const formData = {
      name,
      zone,
      id: clocksArray.length + 1
    }
    
    clocksArray.push(formData);
    addClock([...clocksArray])
    e.target.reset();
   }
  }
  const deleteHandler = (e) => {
    e.preventDefault();
    let newArray = [...clocksArray];
    const clock = e.target.closest(".watch-container");
    const id = parseInt(clock.dataset.id);
    console.log(id);
    let array = newArray.filter(item=>{
      return((item.id !== id))});
    addClock([...array]) 
  }
  return (
    <>
    <div className="error">{error}</div>
    <WatchesForm onSubmit={submitHandler}/>
    <Watches watchesArray={clocksArray} deleteHandler={deleteHandler}/>
    </>
  )
}

export default App