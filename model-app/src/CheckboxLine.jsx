import { useState } from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
export default function CheckboxLine({label}){
    const [ischecked, setIschecked] = useState(true)

    const checkLineContainer ={
        width :"fit-content",
        height : "auto",
        display : "flex",
        flexDirection : "row",
        justifyContent : "start",
        alignItems : "center",
        columnGap : "0.2rem"
    }

    const iconStyle ={
        fontSize :"1.2rem",
        width : "24px",
        height : "24px",
        color : "#ec3838"
    }



    return(
        <div style={checkLineContainer}>
            {
                ischecked ? <BiSolidCheckboxChecked onClick={()=>setIschecked(false)} style={iconStyle}/> : <MdCheckBoxOutlineBlank onClick={()=>setIschecked(true)} style={iconStyle} />
            }

            <p>{label}</p>


        </div>
    )
}