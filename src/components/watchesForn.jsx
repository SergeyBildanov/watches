
export default function WatchesForm({onSubmit}){
    const submitHandler = (e) => {
        onSubmit(e)
    }
    return(
        <form action="watchesForm" className="watches-form" onSubmit={submitHandler}>
            <div className="wrapper">
                <label htmlFor="date">Название</label>
                <input type="text" className="name input" name="name" id="name" required/>
            </div>
            <div className="wrapper">
                <label htmlFor="steps">Временная зона(±ЧЧ:ММ)</label>
                <input type="text" className="zone input" name="zone" id="zone" required/>
            </div>
            
            <button className="submit">ОК</button>
        </form>
    )
}