import React from "react"
function funcPropExample(props){
    console.log(props)
    return(
        <div>
            <p>Name: {props.framework}</p>
            <p>Year: {props.year}</p>
        </div>
    )
}
export default funcPropExample