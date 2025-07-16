import { useState } from "react";

const ComponentB =()=>{

    const [name,setName]=useState("")
    const [age,setAge]=useState("")

    const handleSubmit=(values)=>{
        values.preventDefault()
        console.log(values.target)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <button type="submit">handle</button>
        </form>
    )
}

export default ComponentB;