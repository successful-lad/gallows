import { useSelector, useDispatch } from "react-redux";

const useGallowsState = () => {
    const state = useSelector(
        state => state
    );

    const dispatch = useDispatch();

    const addNewWord = word => dispatch({type: 'ADDWORD', word: word });
    const setGameResult = result => dispatch({type: 'SETRESULT', result: result});
    const setNewRespawn = () => dispatch({type: 'SETRESPAWN', respawn: true})
    return (
        {
            addNewWord,
            setGameResult,
            setNewRespawn,
            state,
        }

    )
};

export default useGallowsState;