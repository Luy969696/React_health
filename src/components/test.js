import React from "react";

function test({argInputs}){
    let inputs={
        in_workUnitNm:'',
        in_workUnitCd:'',
        in_workItemNm:'',
        in_workItemCd:'',
        in_workWeight:'',
        in_workCount:''
    };
    inputs = argInputs;

    return(
        <>
            <span hidden>운동단위코드 :   {inputs.in_workUnitCd}  </span>
            <span>운동단위 :   {inputs.in_workUnitNm}  </span>
            <span  hidden>운동항목코드 :   {inputs.in_workItemCd}  </span>
            <span>운동항목 :   {inputs.in_workItemNm}  </span>
            <span>무게 :   {inputs.in_workWeight}  </span>
            <span>횟수 :   {inputs.in_workCount}  </span>
        </>
    );

}

export default test;