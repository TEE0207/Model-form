import { LiaTimesSolid } from "react-icons/lia";
export default function Display({text, deletechip, index}){

    const display ={
        width :"fit-content",
        height : "auto",
        display : "flex",
        flexDirection : "row",
        justifyContent : "center",
        alignItem : "center",
        columnGap:"0.5rem",
        backgroundColor : "#d7d7d7",
        padding : "0.3rem",
        borderRadius : "0.5rem",
    }

    const iconStyle ={
        cursor :"pointer"
    }

    return(
        <div style={display}>
            <p>{text}</p>
            <LiaTimesSolid
              onClick={()=>deletechip(index)}
             style={iconStyle}/>
        </div>
    )

}