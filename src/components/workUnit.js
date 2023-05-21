import React from "react";

function ItemList({Item}){
    console.log("test"+Item.activate);


    return(
        <tr 
            style={{
                cursor:"pointer",
                // backgroundColor: Item.activate ? "gray":"white"
            }}
        >
            <td hidden>{Item.WorkUnitCd}</td>
            <td style={{
                    width:"100px",
                    border: Item.activate ? "4px solid" : "1px solid",
                    borderColor: Item.activate? "#54E5F5":"black",
                    borderRadius : "8px",
                    textAlign:"center"
                }}>{Item.WorkUnitNm}</td>
        </tr>
    );
}

function workUnit({WorkUnit}){
    return(
        <table >
            <thead>
                <tr>
                    <th>단위</th>
                </tr>
            </thead>
            <tbody>
                {
                    WorkUnit.map(props =>(
                        <ItemList key={props.WorkUnitCd} Item={props} />
                    ))
                }
            </tbody>
            {/* <tfoot>d</tfoot> */}
        </table>
    );
}

export default workUnit;