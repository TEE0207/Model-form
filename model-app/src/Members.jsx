
import CheckboxLine from "./CheckboxLine.jsx";

export default function Members(){

    // const bothIconAndDisplayContainer ={
    //     width : "100%",
    //     heigth : "auto",
    //     display :"flex",
    //     flexDirection :"column",
    //     justifyContent : "start",
    //     alignItems : "start"
    

    const iconAndNewContainer = {
        width : "fit-content",
        heigth : "auto",
        display :"flex",
        flexDirection :"row",
        justifyContent :"start",
        alignItems : "center",
        columnGap : " 0.5rem"
    }

    const membersAndTheTwoDisplay ={
        width : "100%",
        heigth : "auto",
        display :"flex",
        flexDirection :"column",
        justifyContent :"start",
        alignItems : "start",
        rowGap :"0.5rem"
    }

    const newContainer ={
        width : "fit-content",
        heigth : "auto",
        padding : "0.2rem",
        backgroundColor : "#fac5c5",
        borderRadius : "0.5rem"
    }

    const pStyle = {
        fontSize :"0.75rem",
        fontWeight: "200",
        color :"red"
    }

    const hStyle = {
        fontSize : "1rem",
        fontWeight : "200"
    }

    return(
        <div>

            <div style={membersAndTheTwoDisplay}>

                    <p style={hStyle}>Members with access </p>

                    <div style={iconAndNewContainer}>
                       <CheckboxLine label={"Display on profile"} />
                       <div style={newContainer}>
                          <p style={pStyle}>NEW</p>
                       </div>
                    </div>

                    <div className="check-and-display-container">
                       <CheckboxLine 
                         label={'Disable Commenting'}
                       />
                    </div>

            </div>
        </div>
    )
}