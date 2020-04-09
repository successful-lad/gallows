export const stateGallows = (store = {
    word: '', result: false, respawn: false
} , action) => {

    switch (action.type) {
        case 'ADDWORD':
            return {...store, word: action.word};
        case 'SETRESULT':
            return {...store, result: action.result};
        case 'SETRESPAWN':
            return {...store, respawn: true};
        default:
            return store;
    }
};