import { useSelector, useDispatch } from "react-redux";

const useGallowsState = () => {
    const state = useSelector(
        state => state
    );

    const dispatch = useDispatch();

    // const decrement = () => dispatch({ type: 'DECREMENT' });
    // const increment = () => dispatch({ type: 'INCREMENT' });
    const addNewWord = word => dispatch({type: 'ADDWORD', word: word });
    const setGameResult = result => dispatch({type: 'SETRESULT', result: result})
    return (
        {
            addNewWord,
            state,
            setGameResult,
        }

    )
};

export default useGallowsState;