import React from "react"
import useLocalStorage from "./useLocalStorage";

function InputField(){

    // let [InputFieldValue,setInputFieldValue] = useState("")
    let [value,updateValue] = useLocalStorage("inputData")

    function savingInputValues(e){
        let data = e.target.value;
        updateValue(data)
    }

    console.log("value", value)

    return(
        <>
            <div>
                <input type="text" placeholder="Type here" onChange={savingInputValues} />
                {/* <h3>Data that is getting stored : {value} </h3> */}
            </div>
        </>
    )
}

export default InputField
