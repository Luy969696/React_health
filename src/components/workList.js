import React from "react";

function ItemList({Item}){
    return(
        <tr
            style={{
                cursor:"pointer"
            }}
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