import React from "react";

function ItemList({Item}){
    return(
        <tr
            style={{
                cursor:"pointer"
            }}
        >
            <td>{Item.WorkUnitCd}</td>
            <td>{Item.WorkUnitNm}</td>
        </tr>
    );
}

function workUnit({Work}){
    return(
        <table>
            <thead>
                <tr>단위</tr>
            </thead>
            <tbody>
                {
                    Work.map(props =>(
                        <ItemList key={props.WorkUnitCd} Item={props} />
                    ))
                }
            </tbody>
        </table>
    );
}

export default workUnit;