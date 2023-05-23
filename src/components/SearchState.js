import React from "react";
import styled from "styled-components";
import { useStateContext } from "../ItemContext";


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

    const State = useStateContext();
    const WorkUnitNm = State.data_workUnit.find(Item => Item.activate)?.WorkUnitNm;
    const WorkItemNm = State.data_workList.find(Item => Item.activate)?.WorkItemNm;



    const WorkWeight = State.WorkWeight = 0  ? State.WorkWeight.find(Item => Item.activate) : "no";
    const WorkCount = State.WorkCount > 0 ? State.WorkCount.find(Item => Item.activate).length : "0";
    


    


    return(
        <>
        <StateFrame>
            <StateItem>운동단위 :   {WorkUnitNm && WorkUnitNm }  </StateItem>
            <StateItem>운동항목 :   {WorkItemNm && WorkItemNm}  </StateItem>
            <StateItem>무게 :   {WorkWeight && WorkWeight}  </StateItem>
            <StateItem>횟수 :   {WorkCount}  </StateItem>
        </StateFrame> 
        </>
    );

}

export default SearchState;