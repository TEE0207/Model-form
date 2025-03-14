import { useState } from "react"

export default function DownpartComponent({title, description, buttonTitle}){
 const [btn, setBtn] =useState(false)

    const titleDesButtonContainer ={
        width : "100%",
        height :"auto",
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        padding :"1rem 0",
        borderTop : "1px dashed #d7d7d7"

    }

    const buttonContainer={
        width :"fit-content",
        height : "auto"
    }

    const buttonStyle ={
        padding :" 0.5rem",
        borderRadius : "0.5rem",
        border :"none",
        outline : "none",
        cursor : "pointer",
        backgroundColor : btn ? "#878787" : "#d7d7d7"
    }

    const hStyle = {
        fontSize : "1rem",
        fontWeight : "100"
    }

    const pStyle = {
        color :"#9c9c9c"
    }

    return(
        <div style={titleDesButtonContainer}>
            <div className="title-and-des-container">
                <h3 style={hStyle}>{title}</h3>
                <p style={pStyle}>{description}</p>
            </div>
             
            <div style={buttonContainer}>
                <button style={buttonStyle}onPointerEnter={()=>setBtn(true)} onPointerLeave={()=>setBtn(false)}>{buttonTitle}</button>
            </div>
        </div>
    )
}