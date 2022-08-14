
export const initialTableDataState =  null

const tableDataReducer = (tableDataState, action) => {
    console.log("tableDataReducer => ", tableDataState, action);
    switch (action.type) {
        case "INIT":
            return [...action.data];
        case "GET_DOWNLOAD_Data":
            return [...tableDataState];
        case "SORT_DATA":
            let header = true
            return tableDataState.sort((element1, element2) => {
                if (header) {
                    header = false
                    return 0
                }  
               // console.log("inside sort=> ", element1, element2);
                let text1 = Object.values(element1)[action.titleIndex]
                let text2 = Object.values(element2)[action.titleIndex];
                if (text1 === text2) return 0
                if (text1 > text2) return action.isFromStart ? -1 : 1
                if (text1 < text2) return action.isFromStart ? 1 : -1;
            })
            
        case "FILTER_DATA":
        default:
            return [ ...tableDataState ];
    }
};

export default tableDataReducer;