import React from "react";

function ItemList({Item, onClick}){
    return(
        <tr
            style={{
                cursor:"pointer",
                display: Item.visiblable ? "none" : "",
                backgroundColor: Item.activate ? "gray":"white"
                
            }}
            onClick={()=>onClick(Item.WorkItemCd)}
        >
            <td>{Item.WorkItemCd}</td>
            <td>{Item.WorkItemNm}</td>
        </tr>
    );
}

function workList({Work, onClick}){
    return(
        <table>
            <thead>
                <tr>항목</tr>
            </thead>
            <tbody>
                {
                    Work.map(props =>(
                        <ItemList  onClick={onClick} key={props.WorkItemCd} Item={props} />
                    ))
                }
            </tbody>
        </table>
    );
}

export default workList;