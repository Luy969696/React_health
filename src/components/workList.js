import React from "react";
import styled from "styled-components";
import { useStateDispatchContext } from "../ItemContext";

function ItemList({Item}){
    const dispatch = useStateDispatchContext();
    const Toggle = () => dispatch({
        type:"TOGGLE_ITEM",
        WorkItemCd:Item.WorkItemCd,
        WorkUnitCd:Item.WorkUnitCd
    });

    return(
        <tr
            style={{
                cursor:"pointer",                
                display: Item.visiblable ? "none" : ""
            }}
            
        >
            <td hidden>{Item.WorkItemCd}</td>
            <td style={{ width:"100px",
                        border: Item.activate ? "4px solid" : "1px solid",
                        borderColor: Item.activate? "#54E5F5":"black",
                        borderRadius : "8px",
                        textAlign:"center"
            }} onClick={Toggle}>{Item.WorkItemNm}</td>
        </tr>
    );
}

function workList({WorkItem}){
    
    return(
        <>
        
        <table>
            <thead>
                <tr><th>항목</th></tr>
            </thead>
            <tbody>
                {
                    WorkItem.map(props =>(
                        <ItemList key={props.WorkItemCd} Item={props} />
                    ))
                }
            </tbody>
            {/* <tfoot>d</tfoot> */}
            
        </table>
        </>
    );
}

export default workList;