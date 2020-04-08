export const stateGallows = (store = {
    word: '', result: false
} , action) => {

    switch (action.type) {
        case 'ADDWORD':
            return {...store, word: action.word};
        case 'SETRESULT':
            return {...store, result: action.result};
        default:
            return store;
    }
};