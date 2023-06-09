import React,{createContext, useState, useContext,useReducer} from 'react';

const initialize={

  inputs:{
    in_workUnitNm:'',
    in_workItemNm:'',
    in_workWeight:'',
    in_workCount:''
  },

  work_weight:[{
    // id:0,
    // weight:1
    // activate:true
  }],
  work_count:[{
    // id:0,
    // count:1,
    // activate:true
  }],
  
  data_workUnit : [
    {
      id : 1,
      WorkUnitCd:1 ,
      WorkUnitNm:"가슴",
      activate:false
    },
    {
      id : 2,
      WorkUnitCd:2,
      WorkUnitNm:"등",
      activate:false
    },
    {
      id : 3,
      WorkUnitCd:3,
      WorkUnitNm:"하체",
      activate:false
    }],

  data_workList : [
    {
      id : 1,
      WorkUnitCd:1 ,
      WorkUnitNm:"가슴",
      WorkItemCd:1 ,
      WorkItemNm:"벤치프레스",
      activate:false,
      visiblable:true,
    },
    {
      id : 2,
      WorkUnitCd:1,
      WorkUnitNm:"가슴",
      WorkItemCd:2 ,
      WorkItemNm:"바벨프레스",
      activate:false,
      visiblable:true,
    },
    {
      id : 3,
      WorkUnitCd:2,
      WorkUnitNm:"등",
      WorkItemCd:1 ,
      WorkItemNm:"풀업",
      activate:false,
      visiblable:true,
    },
    {
      id : 4,
      WorkUnitCd:2,
      WorkUnitNm:"등",
      WorkItemCd:2 ,
      WorkItemNm:"렛풀다운",
      activate:false,
      visiblable:true,
    },
    {
      id : 5,
      WorkUnitCd:2,
      WorkUnitNm:"등",
      WorkItemCd:3 ,
      WorkItemNm:"바벨로우",
      activate:false,
      visiblable:true,
    },
    {
      id : 6,
      WorkUnitCd:3,
      WorkUnitNm:"하체",
      WorkItemCd:1 ,
      WorkItemNm:"스쿼트",
      activate:false,
      visiblable:true,
    }
  ]
};


function StateReducer(state, action){
  switch(action.type){
    case "ONCHANGE_WEIGHT": 
    
    const updatedWorkWeight = state.work_weight.map(data => ({
      ...data,
      activate: data.weight === action.value
    }));
  
    console.log(updatedWorkWeight)

    return {
      ...state,
      work_weight: updatedWorkWeight
    }

    case "ONCHANGE_COUNT":
      const updatedWorkCount = state.work_count.map(data => ({
        ...data,
        activate: data.count <= action.value ? true : false,
      }));
    
      return {
        ...state,
        work_count: updatedWorkCount
      };
    case "TOGGLE_UNIT":
      return{
        ...state,
        data_workUnit: state.data_workUnit.map(data =>
          data.WorkUnitCd === action.WorkUnitCd ? {...data,
                                  activate:true
                                }:{
                                  ...data,
                                  activate:false
                                }
        ),
        data_workList : state.data_workList.map(data =>
          (data.WorkUnitCd === action.WorkUnitCd) ? {...data, visiblable : false  } : {...data, visiblable : true , activate : false}
        )
    };
    case "TOGGLE_ITEM":
      // console.log(state);
      return {
        ...state,
        data_workList: state.data_workList.map((data) =>
          data.WorkItemCd === action.WorkItemCd && data.WorkUnitCd == action.WorkUnitCd
            ? {
                ...data,
                ...state.inputs.in_workUnitNm = data.WorkUnitNm,
                ...state.inputs.in_workUnitCd = data.WorkUnitCd,
                ...state.inputs.in_workItemCd = data.WorkItemCd,
                ...state.inputs.in_workItemNm = data.WorkItemNm,
                activate: true,
              }
            : {
                ...data,
                activate: false,
              }
        ),
      };
    
  }
  return state;
}




const StateContext = createContext();
const StateDispatchContext = createContext();


export function ItemProvider({children}){
    // const [state] = useState(initialize);
    const [state, dispatch] = useReducer(StateReducer,initialize);

    return(
        <StateContext.Provider value ={state}>
          <StateDispatchContext.Provider value={dispatch}>
            {children}
          </StateDispatchContext.Provider>
        </StateContext.Provider>
    );

}




export function useStateContext(){
    return useContext(StateContext);
}

export function useStateDispatchContext(){
  return useContext(StateDispatchContext);
}

