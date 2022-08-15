export const getDataAction = () => ({
  type: "GET_DOWNLOAD_Data"
});

export const sortDataAction = (titleIndex,isFromStart ) => ({
  type: "SORT_DATA",
  titleIndex,
  isFromStart
});

export const filterDataAction = (filter) => ({
  type: "FILTER_DATA",
  filter: filter.filterData,
  filterBy: filter.filterBy,
});

export const initDataAction = (data) => ({
  type: "INIT",
  data,
});
