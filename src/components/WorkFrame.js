import React from "react";
import State from "./SearchState"
import SearchItem from "./SearchItem"
import {useStateContext} from "../ItemContext";

function WorkFrame(){
    const ItemHeader = useStateContext().inputs;
    const ItemUnit = useStateContext().data_workUnit;
    const ItemList = useStateContext().data_workList;

    return(
        <>
            <State argInputs={ItemHeader}></State>
            <SearchItem WorkUnit={ItemUnit} WorkItem={ItemList}></SearchItem>
        </>
    );
}

export default WorkFrame;