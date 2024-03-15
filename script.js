const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

const queryData = function (data, { filter, sortBy, status }) {
  let filterData;
  filterData = tittleFunction(data, filter);
  filterData = statusFunction(filterData, status);
  filterData = sortFunction(filterData, sortBy);

  return filterData;
};
console.log(
  queryData(notesList, { filter: "physics", sortBy: "latest", status: "all" })
);
function tittleFunction(data, filter) {
  return (filterData = data.filter((note) =>
    note.title.toLowerCase().includes(filter.trim().toLowerCase())
  ));
}
function statusFunction(data, status) {
  if (status === "all") {
    return (data = data);
  } else if (status === "completed") {
    return (filterData = data.filter((note) => note.completed));
  } else if (status === "uncompleted") {
    return (filterData = data.filter((note) => !note.completed));
  }
}
function sortFunction(data, sortBy) {
  if (sortBy === "latest") {
    return (filterData = [...data].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    ));
  }
  if (sortBy === "eraliest") {
    return (filterData = [...data].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ));
  }
}
