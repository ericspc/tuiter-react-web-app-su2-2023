import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import {FaHeart} from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faCommentDots, faRetweet} from "@fortawesome/free-solid-svg-icons";
import React from "react";


const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <div className="row">
            <div className="col-3">
                <FontAwesomeIcon icon={faCommentDots}/>&nbsp;&nbsp;
                {tuit.replies}
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faRetweet}/>&nbsp;&nbsp;
                {tuit.retuits}
            </div>
            <div className="col-3">
                <FaHeart
                    className="text-danger"
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                    }
                />
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faArrowUpFromBracket}/>
            </div>
        </div>
    )

}
export default  TuitStats
