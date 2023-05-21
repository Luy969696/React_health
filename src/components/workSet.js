import React from "react";

function CheckBoxSet({onChange, Type,minNumber, minNumberUnit, maxCount}){
    const useType = Type ==="무게" ? "KG" : "회";
    const checkBoxArray =[];
    const weight = minNumber;
    const weightUnit = minNumberUnit;
    const Count = maxCount;
    
    for(let i=0 ; i<Count ; i++){
        let additionalWeight = weightUnit * i * 1.0;
        let WeightKg = weight + additionalWeight;

        checkBoxArray.push(
            <span key={i}
                style={{
                    display:"inline-block",
                    justifyContent:"space-between",
                    textAlign:"center"
                }}
            >
                <div 
                    style={{margin:"0px 5px"}}
                >
                <label for={WeightKg}>{WeightKg}{useType}</label>
                </div>
                <div>
                    
                    <input type="radio" name={Type} value={WeightKg} onChange={onChange}></input>
                </div>

            </span>
        );
    }


    return(
        checkBoxArray
    );
}


function workSet({onChange}){
    // console.log(onChange);
    return(
        <div
            style={{
                margin:"10px 10px 0px",
                
                width:"70%",
                border: "2px solid",
                borderRadius:"4px",
                backgroundColor:"#ccffff",
                
            }}
        >
            <div>
                <CheckBoxSet onChange={onChange} Type="무게" minNumber={20} minNumberUnit={5} maxCount={20}></CheckBoxSet>
            </div>
            <hr></hr>
            <div>
                <CheckBoxSet onChange={onChange} Type="횟수" minNumber={1} minNumberUnit={1} maxCount={20}></CheckBoxSet>
            </div>
        </div>
    );
}

export default workSet;