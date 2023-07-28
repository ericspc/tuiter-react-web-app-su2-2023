import {useDispatch, useSelector} from "react-redux";
import {deleteTuit} from "../reducers/home-reducer";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowUpFromBracket,
    faCircleCheck,
    faCommentDots,
    faHeart,
    faRetweet,
    faX
} from "@fortawesome/free-solid-svg-icons";

const TuitItem = () => {
    const { tuits } = useSelector(state => state.home)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <>
            <ul className="list-group">
                {
                    tuits.map(tuit =>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-1">
                                    <img width={40} height={40} className="rounded-circle" src={`${tuit.image}`}/>
                                </div>
                                <div className="col-11">
                                    <div><b>{tuit.userName}&nbsp;&nbsp;</b>
                                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#0000ff",}}/>&nbsp;&nbsp;
                                        {tuit.handle} . {tuit.time}
                                        <FontAwesomeIcon icon={faX}  size={"xs"} className={"float-end"}
                                                         onClick={() => deleteTuitHandler(tuit._id)}/>
                                    </div>
                                    <div>{tuit.tuit}</div>
                                    <br/>
                                    {/*<div>*/}
                                    {/*    <FontAwesomeIcon icon={faCommentDots}/>&nbsp;&nbsp;*/}
                                    {/*    {tuit.replies}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    &nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    <FontAwesomeIcon icon={faRetweet}/>&nbsp;&nbsp;*/}
                                    {/*    {tuit.retuits}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    &nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}}/>&nbsp;&nbsp;*/}
                                    {/*    {tuit.likes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    &nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*    <FontAwesomeIcon icon={faArrowUpFromBracket}/>*/}
                                    {/*</div>*/}
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
                                            <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}}/>&nbsp;&nbsp;
                                            {tuit.likes}
                                        </div>
                                        <div className="col-3">
                                            <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>)
                }
            </ul>
        </>
    );
}
export default TuitItem