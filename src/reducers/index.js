export const stateGallows = (store = {} , action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return store +1;
        case 'DECREMENT':
            return store -1;
        default:
            return store;
    }
};