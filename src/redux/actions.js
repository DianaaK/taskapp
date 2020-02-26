import { ActionTypes } from "./store";
import { store } from "./index";

class Actions {
  addRow = row => {
    return dispatch => {
      dispatch({
        type: ActionTypes.ADD_ROW,
        payload: row
      });
    };
  };

  deleteRow = (rowId, tasks) => {
    return dispatch => {
      const toDelete = tasks.find(task => task.id === rowId);
      const indexToDelete = tasks.indexOf(toDelete);
      dispatch({
        type: ActionTypes.DELETE_ROW,
        payload: indexToDelete
      });
    };
  };

  generateColumn = () => {
    return dispatch => {
      const state = store.getState();
      const columnSequenceId = state.columnSequenceId + 1;
      dispatch({
        type: ActionTypes.SET_COLUMNSEQUENCEID,
        payload: columnSequenceId
      });
      return {
        id: columnSequenceId,
        key: "col" + columnSequenceId,
        label: "",
        type: "",
        inputType: ""
      };
    };
  };

  addColumn = column => {
    return dispatch => {
      if (!column) {
        column = this.generateColumn();
      }
      dispatch({
        type: ActionTypes.ADD_COLUMN,
        payload: column
      });
    };
  };

  deleteColumn = id => {
    return dispatch => {
      dispatch({
        type: ActionTypes.DELETE_COLUMN,
        payload: id
      });
    };
  };

  sortColumn = (ev, key) => {
    return dispatch => {
      const sortTasks = (tasks, key) => {
        const tasksCopy = tasks.map(x => x);
        tasks.sort((task1, task2) => {
          if (task1[key] > task2[key]) return 1;
          else if (task1[key] < task2[key]) return -1;
          else return task1.id - task2.id;
        });
        if (JSON.stringify(tasks) === JSON.stringify(tasksCopy))
          tasks = tasks.reverse();
        return tasks;
      };
      dispatch({
        type: ActionTypes.SORT_COLUMN,
        payload: { key, sortTasks }
      });
    };
  };

  taskChange = (id, key, value) => {
    return dispatch => {
      dispatch({
        type: ActionTypes.TASK_INPUT_CHANGE,
        payload: { id, key, value }
      });
    };
  };

  headerChange = (id, value) => {
    return dispatch => {
      dispatch({
        type: ActionTypes.HEADER_INPUT_CHANGE,
        payload: { id, value }
      });
    };
  };
}

export const actions = new Actions();
