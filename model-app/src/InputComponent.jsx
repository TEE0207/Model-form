import { useState } from "react"
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import Display from "./display";


export default function InputComponent(){
    const [hovered, setHovered] = useState(false);
    const [pointer, setPointer] = useState(false);
    const [value, setvalue] = useState("")
    const [fullText, setFullText] = useState ([])

    const handleSubmittion = (e) =>{
        e.preventDefault()

        if(value === ""){
            return
        }
         if(fullText.length >= 6){
            return
         }else{
            setFullText([...fullText, value])
        }
        setvalue("")
    }

    const handleDelete =(index)=>{
        const filleredText = fullText.filter((_,ind)=> ind != index)
        setFullText(filleredText)
    }

    const labelAndInputContainer ={
        width : "100%",
        height : "auto",
        display : "flex",
        flexDirection : "column",
        justifyContent : "start",
        alignItems : "start",
    }

    const labelAndIcon ={
        width : "100%",
        height : "auto",
        display : "flex",
        flexDirection : "row",
        justifyContent : "start",
        alignItems : "center",
        columnGap : "0.2rem"
    }

    const inputAndIconContainer ={
        width : "100%",
        height : "auto",
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        border :"1px solid #d7d7d7",
        padding : "0.7rem",
        borderRadius : "0.5rem",
        marginBottom : "0.5rem",
        border: hovered ? "2px solid red" : "1px solid #d7d7d7",
        cursor :"pointer"
    }

    const input ={
        border : 'none',
        outline : "none"
    }

    const plusIcon ={
        color : "#d7d7d7",
        fontSize : "1.5rem",
        cursor : "pointer",
        color: pointer ? "gray" : "#d7d7d7",
    }

    const displayContainer ={
        width : "100%",
        height : "auto",
        display : "flex",
        flexDirection : "row",
        columnGap : "0.3rem",
        flexWrap : "wrap",
        rowGap : "0.3rem"
    }

    const pStyle ={
         color :"#9c9c9c"
    }

    return(
        <div>
            <form onSubmit={handleSubmittion}>
        
                <div style={labelAndInputContainer}>
                    <div style={labelAndIcon}>
                        <p>Add Tag</p>
                        <p style={pStyle}>(max 8)</p>
                        <BsFillInfoCircleFill style={pStyle}/>
                    </div>
                   <div style={inputAndIconContainer}onPointerEnter={()=>setHovered(true)} onPointerLeave={()=>setHovered(false)}>
                    <input
                        type="text"
                        placeholder="Add tags..."
                        value={value }
                        onChange={(e)=>setvalue(e.target.value)}
                        name= "tag"
                        style={input}
                      />
                      <FiPlusSquare onClick={handleSubmittion} style={plusIcon} onPointerEnter={()=>setPointer(true)} onPointerLeave={()=>setPointer(false)} />
                   </div>


                   <div style={displayContainer}>
                    {
                        fullText.map((items,index)=>(
                            <Display
                             text={items}
                             deletechip={handleDelete}
                             index={index}
                             key={index}
                            />
                        ))
                    }
                   </div>
                    
                </div>
            </form>

        </div>
    )
}