
import DownpartComponent from "./DownpartComponent.jsx";
import InputComponent from "./InputComponent.jsx";
import Members from "./Members.jsx";

export default function Layout(){

    const layoutContainer ={
        width : "22%",
        height : "auto",
        margin : "4rem auto",
        display : "flex",
        flexDirection : "column",
        rowGap : "1.5rem",
       border : "1px solid #d7d7d7",
       padding : "1rem",
       borderRadius :"0.5rem"

    }

    return(
        <div style={layoutContainer}>
            <InputComponent />

            <Members />

            <div className="downpart">
                <DownpartComponent
                title={"Add to portfolio"}
                description={"choose a portfolio to add your work"}
                buttonTitle={"Choose"}

                
                />
                <DownpartComponent
                    title={"Add Download File"}
                    description={"share your file and allow downloads "}
                    buttonTitle={"Add"}
                    
                />
            </div>
           
        </div>
    )
}