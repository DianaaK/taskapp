import { ActionTypes, initialState } from "./store";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_ROW: {
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
      };
    }
    case ActionTypes.DELETE_ROW: {
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload)
      };
    }
    case ActionTypes.ADD_COLUMN: {
      return {
        ...state,
        tasks: state.tasks.map(
          task => (task = { ...task, [action.payload.key]: "" })
        ),
        columns: state.columns.concat(action.payload)
      };
    }
    case ActionTypes.DELETE_COLUMN: {
      return {
        ...state,
        columns: state.columns.filter(column => column.key !== action.payload)
      };
    }
    case ActionTypes.SORT_COLUMN: {
      return {
        ...state,
        tasks: action.payload.sortTasks(state.tasks, action.payload.key)
      };
    }
    case ActionTypes.TASK_INPUT_CHANGE: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            task[action.payload.key] = action.payload.value;
          }
          return task;
        })
      };
    }
    case ActionTypes.HEADER_INPUT_CHANGE: {
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.key === action.payload.key) {
            column.label = action.payload.value;
          }
          return column;
        })
      };
    }
    default:
      return state;
  }
}

export default reducer;
