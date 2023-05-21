import React from "react";
import styled from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: #e9ecef;
//   }
// `;
const GlobalCss = styled`
    td{background:red;
        color:red;
    }

`;


function ItemList({Item}){
    console.log("IN"+{Item});
    return(
        <tr
            style={{
                cursor:"pointer",                
            }}
            
        >
            <td hidden>{Item.WorkItemCd}</td>
            <td style={{ width:"100px",
                        border: Item.activate ? "4px solid" : "1px solid",
                        borderColor: Item.activate? "#54E5F5":"black",
                        borderRadius : "8px",
                        textAlign:"center"
            }}>{Item.WorkItemNm}</td>
        </tr>
    );
}

function workList({WorkItem}){
    
    return(
        <>
        <GlobalCss/>
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