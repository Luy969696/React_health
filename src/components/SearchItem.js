import React from "react";
import styled from "styled-components";
import WorkUnitList from "./workUnit";
import WorkItemList from "./workList";


const Frame = styled.div`
    background:#eeffdd;
`;

const WorkUnitFrame = styled.div`
    background : #eeeeee;
    border: 2px solid;
    border-radius:3px;
    width:20%;
    height:60%;
    display: inline-box;
    tr{ background:white;}
`;

function SearchItem({WorkUnit, WorkItem}){;
    return(
        <>
            <Frame>
            <div> test </div>
            <WorkUnitFrame>
                <WorkUnitList WorkUnit={WorkUnit}></WorkUnitList>
                <WorkItemList WorkItem={WorkItem}></WorkItemList>
            </WorkUnitFrame>
            </Frame>
        </>
    );
}


export default SearchItem;