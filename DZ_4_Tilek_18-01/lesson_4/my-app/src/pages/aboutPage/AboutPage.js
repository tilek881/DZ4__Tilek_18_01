import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncFunctionAction} from "../../redux/actions/action";

function AboutPage(props) {
    const dispatch = useDispatch()
    const title = useSelector(state => state.titleReducer.title)
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={()=> dispatch(asyncFunctionAction())}>after 2sec</button>
        </div>
    );
}

export default AboutPage;