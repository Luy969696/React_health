import React from "react";
import {useStateDispatchContext, useStateContext } from "../ItemContext";

function SetCheckBox({Type,minNumber, minNumberUnit, maxCount}){
    const state = useStateContext();
    
    const useType = Type;
    const checkBoxArray =[];
    const default_number = minNumber;
    const numberUnit = minNumberUnit;
    const Count = maxCount;
    
    for(let i=0 ; i<Count ; i++){
        let additionalnumber = numberUnit * i * 1.0;
        let number = default_number + additionalnumber;

        if (useType === "무게") {
            checkBoxArray.push(
                {   
                    id : i,
                    weight : number,
                    activate:false,
                }
            );
        }else{
            checkBoxArray.push(
                {   
                    id : i,
                    count : number,
                    activate:false
                }
            );
        }
    }

    if(useType==="무게"){   
        state.work_weight=checkBoxArray;
    }else{
        state.work_count=checkBoxArray;
    }

    return checkBoxArray;
}

function CheckBoxSet({Type,minNumber, minNumberUnit, maxCount}){
    const dispatch = useStateDispatchContext();

    SetCheckBox({Type,minNumber, minNumberUnit, maxCount});

    const State = useStateContext();
    const checkBoxArray =[];
    
    
    let useType="";
    let RadioCheck =""
    let localArr;
    let onClickDispatch;
    

    if(Type ==="무게"){
        useType = "KG"
        localArr = State.work_weight;
        RadioCheck="radio"
        onClickDispatch = "ONCHANGE_WEIGHT"
        // onClick = (value) => dispatch({
        //     type:"ONCHANGE_WEIGHT",
        //     id:value
        // });
    }else{
        useType = "회"
        localArr = State.work_count;
        RadioCheck="checkbox"
        onClickDispatch = "ONCHANGE_COUNT"

        // onClick = (value) => dispatch({
        //     type:"ONCHANGE_COUNT",
        //     id:value
        // });
    }

    for(let i=0 ; i<localArr.length ; i ++){
        const value = localArr[i].weight || localArr[i].count;

        checkBoxArray.push(
            <span key={i}
                style={{
                    display:"inline-block",
                    justifyContent:"space-between",
                    textAlign:"center"
                }}>

                <div 
                    style={{margin:"0px 5px"}}>
                    <label for={value}>{value}{useType}</label>
                </div>

                <div>
                    <input type={RadioCheck} name={Type} value={value} onClick={() => 
                                dispatch({
                                    type:onClickDispatch,
                                    id:value
                                })
                            } ></input>
                </div>
            </span>
        );
    }
    
    return(
        checkBoxArray
    );
}


function workSet(){
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
                <CheckBoxSet Type="무게" minNumber={10} minNumberUnit={5} maxCount={20}></CheckBoxSet>
            </div>
            <hr></hr>
            <div>
                <CheckBoxSet Type="횟수" minNumber={1} minNumberUnit={1} maxCount={25}></CheckBoxSet>
            </div>
        </div>
    );
}

export default workSet;