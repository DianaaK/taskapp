export const initialState = {
  title: "Task App",
  columns: [
    {
      key: "id",
      label: "ID",
      type: "id",
      width: "80px"
    },
    {
      key: "aplicatie",
      label: "Aplicatie",
      type: "select",
      options: ["Api", "Dashboard", "Dashboard, Api", "Mobile", "Tablet"]
    },
    {
      key: "tip",
      label: "Tip",
      type: "select",
      options: ["Bug", "Feature"]
    },
    {
      key: "api",
      label: "API",
      type: "select",
      options: ["DA", "NU"]
    },
    {
      key: "descriere",
      label: "Descriere",
      type: "input",
      inputType: "text",
      width: "380px"
    },
    {
      key: "prioritate",
      label: "Prioritate",
      type: "input",
      inputType: "number",
      width: "100px"
    },
    {
      key: "asignat",
      label: "Asignat",
      type: "select",
      options: ["Andreea", "Alex", "Andrei", "George", "Radu", "Bogdan"]
    },
    {
      key: "reporter",
      label: "Reporter",
      type: "select",
      options: ["Andreea", "Alex", "Andrei", "George", "Radu", "Bogdan"]
    },
    {
      key: "branch",
      label: "Branch",
      type: "input",
      inputType: "text"
    },
    {
      key: "status",
      label: "Status",
      type: "select",
      options: [
        "In Progress",
        "To do",
        "In Pending",
        "Done",
        "Cancelled",
        "In Testing",
        "Reopen",
        "Merged",
        "Approved"
      ]
    },
    {
      key: "dataRep",
      label: "Date reported",
      type: "input",
      inputType: "date"
    },
    {
      key: "start",
      label: "Start Date",
      type: "input",
      inputType: "date"
    },
    {
      key: "end",
      label: "End Date",
      type: "input",
      inputType: "date"
    },
    {
      key: "duration",
      label: "Duration",
      type: "input",
      inputType: "number",
      width: "80px"
    },
    {
      key: "obs",
      label: "Observatii",
      type: "input",
      inputType: "text",
      width: "380px"
    }
  ],
  tasks: [
    {
      id: 1,
      aplicatie: "Dashboard, Api",
      tip: "Bug",
      api: "NU",
      descriere: "Ceva cu autopiloti",
      prioritate: 1,
      asignat: "Alex",
      reporter: "Radu",
      branch: "chestie",
      status: "Merged",
      dataRep: "2020-01-26",
      start: "2020-01-27",
      end: "2020-01-28",
      duration: "0.7",
      obs: "de scos comentariul"
    },
    {
      id: 2,
      aplicatie: "Mobile",
      tip: "Bug",
      api: "DA",
      descriere: "Componenta de content la events",
      prioritate: 1,
      asignat: "Andreea",
      reporter: "Radu",
      branch: "alta chestie",
      status: "In Progress",
      dataRep: "-",
      start: "2020-01-28",
      end: "2020-01-17",
      duration: "2.6",
      obs: "-"
    },
    {
      id: 3,
      aplicatie: "Dashboard",
      tip: "Feature",
      api: "NU",
      descriere: "Login with AppleId",
      prioritate: 1,
      asignat: "Andrei",
      reporter: "Andreea",
      branch: "chestie",
      status: "Merged",
      dataRep: "2020-01-28",
      start: "2020-01-28",
      end: "2020-01-31",
      duration: "0.5",
      obs: "-"
    },
    {
      id: 4,
      aplicatie: "Tablet",
      tip: "BUG",
      api: "DA",
      descriere: "Sa nu setam data nasterii fb",
      prioritate: 1,
      asignat: "Andreea",
      reporter: "Radu",
      branch: "chestie",
      status: "Merged",
      dataRep: "2020-01-29",
      start: "2020-02-03",
      end: "2020-02-03",
      duration: "0.5",
      obs: "-"
    },
    {
      id: 5,
      aplicatie: "Mobile",
      tip: "Feature",
      api: "DA",
      descriere: "Instructiuni pe listele goale",
      prioritate: 2,
      asignat: "Alex",
      reporter: "George",
      branch: "--",
      status: "DONE",
      dataRep: "2020-01-31",
      start: "2020-01-31",
      end: "2020-02-03",
      duration: "1",
      obs: "-"
    },
    {
      id: 6,
      aplicatie: "Mobile",
      tip: "Bug",
      api: "DA",
      descriere: "Ceva descriere",
      prioritate: 4,
      asignat: "George",
      reporter: "Radu",
      branch: "idk",
      status: "In Pending",
      dataRep: "2020-02-03",
      start: "2020-02-03",
      end: "2020-02-04",
      duration: "0.5",
      obs: "smth"
    }
  ]
};

export const ActionTypes = {
  ADD_ROW: "ADD_ROW",
  DELETE_ROW: "DELETE_ROW",
  ADD_COLUMN: "ADD_COLUMN",
  DELETE_COLUMN: "DELETE_COLUMN",
  SORT_COLUMN: "SORT_COLUMN",
  TASK_INPUT_CHANGE: "TASK_INPUT_CHANGE",
  HEADER_INPUT_CHANGE: "HEADER_INPUT_CHANGE"
};
