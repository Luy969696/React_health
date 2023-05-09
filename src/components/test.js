import React from "react";

function test({argInputs}){
    let inputs={
        in_workUnit:'',
        in_workItem:'',
        in_workWeight:'',
        in_workCount:''
    };
    inputs = argInputs;

    return(
        <>
            <span>운동단위 :   {inputs.in_workUnit}  </span>
            <span>운동항목 :   {inputs.in_workItem}  </span>
            <span>무게 :   {inputs.in_workWeight}  </span>
            <span>횟수 :   {inputs.in_workCount}  </span>
        </>
    );

}

export default test;