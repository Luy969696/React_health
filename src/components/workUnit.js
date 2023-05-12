import React from "react";

function ItemList({Item, onClick}){
    return(
        <tr 
            style={{
                cursor:"pointer",
                backgroundColor: Item.activate ? "gray":"white"
            }}
            onClick={() => onClick(Item.WorkUnitCd)}
        >
            <td>{Item.WorkUnitCd}</td>
            <td>{Item.WorkUnitNm}</td>
        </tr>
    );
}
// onClick ={()=> onToggle(user.id)}

function workUnit({Work, onClick}){
    return(
        <table>
            <thead>
                <tr>단위</tr>
            </thead>
            <tbody>
                {
                    Work.map(props =>(
                        <ItemList onClick={onClick} Item={props} />
                    ))
                }
            </tbody>
        </table>
    );
}

export default workUnit;