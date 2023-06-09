// import React,{useReducer, useCallback} from 'react';
// import styled, { css } from 'styled-components';
// import WorkUnit from './components/workUnit.js'
// import WorkList from './components/workList.js'
// import WorkSet from './components/workSet.js'
// import WorkTest from './components/test.js'

// const TABLECOLOR = "F4F2F3";

// const initialize={

//   inputs:{
//     in_workUnitCd:'',
//     in_workUnitNm:'',
//     in_workItemCd:'',
//     in_workItemNm:'',
//     in_workWeight:'',
//     in_workCount:''
//   },

//   data_workUnit : [
//     {
//       id : 1,
//       WorkUnitCd:1 ,
//       WorkUnitNm:"가슴",
//       activate:false
//     },
//     {
//       id : 2,
//       WorkUnitCd:2,
//       WorkUnitNm:"등",
//       activate:false
//     },
//     {
//       id : 3,
//       WorkUnitCd:3,
//       WorkUnitNm:"하체",
//       activate:false
//     }],

//   data_workList : [
//     {
//       id : 1,
//       WorkUnitCd:1 ,
//       WorkUnitNm:"가슴",
//       WorkItemCd:1 ,
//       WorkItemNm:"벤치프레스",
//       activate:false,
//       visiblable:true,
//     },
//     {
//       id : 2,
//       WorkUnitCd:1,
//       WorkUnitNm:"가슴",
//       WorkItemCd:2 ,
//       WorkItemNm:"바벨프레스",
//       activate:false,
//       visiblable:true,
//     },
//     {
//       id : 3,
//       WorkUnitCd:2,
//       WorkUnitNm:"등",
//       WorkItemCd:1 ,
//       WorkItemNm:"풀업",
//       activate:false,
//       visiblable:true,
//     },
//     {
//       id : 4,
//       WorkUnitCd:2,
//       WorkUnitNm:"등",
//       WorkItemCd:2 ,
//       WorkItemNm:"렛풀다운",
//       activate:false,
//       visiblable:true,
//     },
//     {
//       id : 5,
//       WorkUnitCd:2,
//       WorkUnitNm:"등",
//       WorkItemCd:3 ,
//       WorkItemNm:"바벨로우",
//       activate:false,
//       visiblable:true,
//     },
//     {
//       id : 6,
//       WorkUnitCd:3,
//       WorkUnitNm:"하체",
//       WorkItemCd:1 ,
//       WorkItemNm:"스쿼트",
//       activate:false,
//       visiblable:true,
//     }
//   ]
// };


// function reducer(state, action){
//   console.log(state);
//   console.log(action);
  
//   switch(action.type){
//     case "ONCHANGE_COUNT":
//       return{
//         ...state,
//         inputs:{
//           ...state.inputs,
//           in_workCount: action.value
//         }
//     };
//     case "ONCHANGE_WEIGHT":
//       return{
//         ...state,
//         inputs:{
//           ...state.inputs,
//           in_workWeight : action.value
//         }
//     };
//     case "TOGGLE_UNIT":
//       return{
//         ...state,
//         data_workUnit: state.data_workUnit.map(data =>
//           data.WorkUnitCd === action.WorkUnitCd ? {...data,
//                                   activate:true
//                                 }:{
//                                   ...data,
//                                   activate:false
//                                 }
//         ), 
//         data_workList : state.data_workList.map(data =>
//           (data.WorkUnitCd === action.WorkUnitCd) ? {...data, visiblable : false } : {...data, visiblable : true }
//         )
//     };
//     case "TOGGLE_ITEM":
//       return {
//         ...state,
//         data_workList: state.data_workList.map((data) =>
//           data.WorkItemCd === action.WorkItemCd && data.WorkUnitCd == action.WorkUnitCd
//             ? {
//                 ...data,
//                 ...state.inputs.in_workUnitNm = data.WorkUnitNm,
//                 ...state.inputs.in_workUnitCd = data.WorkUnitCd,
//                 ...state.inputs.in_workItemCd = data.WorkItemCd,
//                 ...state.inputs.in_workItemNm = data.WorkItemNm,
//                 activate: true,
//               }
//             : {
//                 ...data,
//                 activate: false,
//               }
//         ),
//       };
    
//   }
//   return state;
// }

// const Frame = styled.div`
//   width: 100%;
//   margin: 50px 0px;
//   display:flex;
//   ${
//     props => {
//       return css`
//         background-color: ${props.color};
//       `;
//     }  
//   };
// `;
// function App() {

//   const [state, dispatch] = useReducer(reducer, initialize);
//   const {datas} = state;
//   // const {in_workCount,in_workItemNm,in_workUnitNm,in_workWeight} = state.inputs;

//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
    
//     switch(name){
//       case "횟수":
//         dispatch({
//           type: 'ONCHANGE_COUNT',
//           name,
//           value
//         }); 
//       break;

//       case "무게":
//         dispatch({
//           type: 'ONCHANGE_WEIGHT',
//           name,
//           value
//         }); 
//       break;
//     }
//       }, []);

//     const onClickUnit = useCallback((WorkUnitCd, WorkUnitNm) => {
//       dispatch({
//         type: 'TOGGLE_UNIT',
//         WorkUnitCd,
//         WorkUnitNm
//       });
//     },[]);

//     const onClickItem = useCallback((WorkUnitCd,WorkUnitNm , WorkItemCd, WorkItemNm) => {
//       dispatch({
//         type: 'TOGGLE_ITEM',
//         WorkUnitCd,
//         WorkUnitNm,
//         WorkItemCd,
//         WorkItemNm
//       });
//     },[]);
    

//   return (
//     <>

//       <WorkTest argInputs={state.inputs}></WorkTest>
      
//       <Frame color={TABLECOLOR}>
//         <WorkUnit Work={state.data_workUnit} onClick={onClickUnit}></WorkUnit>
//         <WorkList Work={state.data_workList} onClick={onClickItem}></WorkList>
        
//         <WorkSet onChange={onChange}></WorkSet>
//       </Frame>
//       <Frame color="blue">
//         운동 히스토리
//       </Frame>
//     </>
//   );
// }

// export default App;


import React from 'react';
import WorkFrame from './components/WorkFrame';
import WorkHistoryFrame from './components/WorkHistoryFrame'
import WorkSetFrame from './components/workSet'
import { ItemProvider } from './ItemContext';

function App(){
  return (
    <>
      <ItemProvider>
        <WorkFrame> 
        </WorkFrame>
          <WorkSetFrame/>
        <hr/>
        <WorkHistoryFrame/>
      </ItemProvider>
    
    </>
  );
}

export default App;


