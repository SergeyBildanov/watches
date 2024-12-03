import { useState, useEffect } from "react";
import deleteSVG from "../assets/delete.svg"
export default function Watch({name, id,  offset, deleteHandler}){
    let [date, setDate] = useState(new Date());
    let sign = offset[0]
    let timeout;
    let offsetParts = offset.slice(1, offset.length).split(":");
    offsetParts = offsetParts.map((item)=>{return parseInt(item)});
    const getData = () => {
        let newDate = new Date();
        if(sign === "+"){
            setDate(new Date(newDate.getTime() + (offsetParts[0]*3600000 + offsetParts[1]*60000)));
        }
        else if(sign === "-"){
            setDate(new Date(newDate.getTime() - (offsetParts[0]*3600000 + offsetParts[1]*60000)));
        }
    }
    useEffect(()=>{
        getData();
        setTimeout(()=>{getData()}, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    useEffect(()=>{
        timeout = setTimeout(()=>{getData()}, 1000);
    }, [date]);
    return(
        <div className="watch-container" data-id={id}>
        <div className="header">
        <div className="watch-name">{name}</div>
        <img src={deleteSVG} alt="delete" className="delete" onClick={deleteHandler}/>
        </div>
        <div className="watch">
            <div className="hour arrow" data-value={date.getUTCHours()} style={{transform: `rotate(${30*date.getUTCHours()}deg)`}}></div>
            <div className="minute arrow" data-value={date.getUTCMinutes()} style={{transform: `rotate(${6*date.getUTCMinutes()}deg)`}}></div>
            <div className="second arrow" data-value={date.getUTCSeconds()} style={{transform: `rotate(${6*date.getUTCSeconds()}deg)`}}></div>
        </div>
        </div>
    );
}