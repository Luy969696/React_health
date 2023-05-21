import React from "react";
import styled from "styled-components";


const StateFrame = styled.div`
    width : 100%;
    background : #ffffff;
    box-sizing: border-box;
    outline:none;
`;

const StateItem = styled.span`
    display: inline-block;
    margin-right: 10px;
    padding: 10px 10px;
    border: 2px solid;
    background: #00ff00;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    
`;

function SearchState({argInputs}){
    let inputs={
        in_workUnitNm:'',
        in_workItemNm:'',
        in_workWeight:'',
        in_workCount:''
    };
    inputs = argInputs;

    return(
        <>
        <StateFrame>
            <StateItem>운동단위 :   {inputs.in_workUnitNm}  </StateItem>
            <StateItem>운동항목 :   {inputs.in_workItemNm}  </StateItem>
            <StateItem>무게 :   {inputs.in_workWeight}  </StateItem>
            <StateItem>횟수 :   {inputs.in_workCount}  </StateItem>
        </StateFrame> 
        </>
    );

}

export default SearchState;