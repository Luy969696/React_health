import React,{useReducer, useCallback} from 'react';
import styled, { css } from 'styled-components';
import WorkUnit from './components/workUnit.js'
import WorkList from './components/workList.js'
import WorkSet from './components/workSet.js'

const TABLECOLOR = "F4F2F3";

const initialize={

  inputs:{
    in_workUnit:'',
    in_workItem:'',
    in_workWeight:'',
    in_workCount:''
  },

  data : [
    {
      id : 1,
      WorkUnitCd:1 ,
      WorkUnitNm:"가슴",
      WorkItemCd:1 ,
      WorkItemNm:"벤치프레스"
    },
    {
      id : 2,
      WorkUnitCd:1,
      WorkUnitNm:"가슴",
      WorkItemCd:2 ,
      WorkItemNm:"바벨프레스"
    },
    {
      id : 3,
      WorkUnitCd:2,
      WorkUnitNm:"등",
      WorkItemCd:1 ,
      WorkItemNm:"풀업"
    },
    {
      id : 4,
      WorkUnitCd:2,
      WorkUnitNm:"등",
      WorkItemCd:2 ,
      WorkItemNm:"렛풀다운"
    },
    {
      id : 5,
      WorkUnitCd:2,
      WorkUnitNm:"등",
      WorkItemCd:3 ,
      WorkItemNm:"바벨로우"
    },
    {
      id : 6,
      WorkUnitCd:3,
      WorkUnitNm:"하체",
      WorkItemCd:1 ,
      WorkItemNm:"스쿼트"
    }
  ]
};


function reducer(state, action){
  switch(action.type){
    case "ONCHANGE":
      console.log("Click");
      return{
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]: action.value
        }
    };
  }


  return state;
}

const Frame = styled.div`
  width: 100%;
  margin: 50px 0px;
  display:flex;
  ${
    props => {
      return css`
        background-color: ${props.color};
      `;
    }  
  };
`;






function App() {

  const [state, dispatch] = useReducer(reducer, initialize);
  const {datas} = state;
  const {in_workCount,in_workItem,in_workUnit,in_workWeight} = state.inputs;


  const onChange = useCallback(e => {
    console.log(1);
    const { name, value } = e.target;
    dispatch({
      type: 'ONCHANGE',
      name,
      value
    });
  }, []);



  return (
    <>
      <span>운동단위 :     </span>
      <span>운동항목 :     </span>
      <span>무게 :     </span>
      <span>횟수 :     </span>

      <Frame color={TABLECOLOR}>
        <WorkUnit Work={initialize.data}></WorkUnit>
        <WorkList onChange={onChange} Work={initialize.data}></WorkList>
        <WorkSet></WorkSet>
      </Frame>
      <Frame color="blue">
        운동 히스토리
      </Frame>
    </>
  );
}

export default App;
