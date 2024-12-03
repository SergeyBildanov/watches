import Watch from "./Watch";
export default function Watches({watchesArray, deleteHandler}){
    return(
        <div className="watches-container">
            {
                 watchesArray.map((item)=>{
                    return <Watch name={item.name} offset={item.zone} key={item.id} id={item.id} deleteHandler={deleteHandler}/>
                 })
            }
        </div>        
    )
}