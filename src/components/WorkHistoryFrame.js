import React from "react";
import styled from "styled-components";


const  HistoryFrame = styled.div`
    background: #e9ecef;
`;

const Caption = styled.div`
    margin: 20px 0px;
    background:#eeeeee;
`;

const Item = styled.span`
    display: inline-block;
    box-sizing:box-border;
    background:#ffffff;
    margin: 10px 5px;
    padding: 5px 2px;
    border: 2px solid;
    border-radius: 3px;
`;


function WorkHistoryFrame(){
    return(
        <>
        
            <HistoryFrame> 
                <Caption>운동히스토리</Caption> 
                <div>
                <Item>Item1</Item>    
                <Item>Item2</Item>    
                <Item>Item3</Item>    
                <Item>Item4</Item>    
              
                </div>                
            </HistoryFrame> 
            
        </>
    );
}

export default WorkHistoryFrame;