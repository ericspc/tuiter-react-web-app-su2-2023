import React from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";

const TuitsList = () =>{
    const { tuits } = useSelector(state => state.home)
    return(
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
                                    </div>
                                    <div>{tuit.tuit}</div>
                                    <br/>
                                    <div>
                                        <FontAwesomeIcon icon={faCommentDots} />&nbsp;&nbsp;
                                        {tuit.replies}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faRetweet} />&nbsp;&nbsp;
                                        {tuit.retuits}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faHeart}  style={{color: "#ff0000",}} />&nbsp;&nbsp;
                                        {tuit.likes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                    </div>
                                </div>
                            </div>
                        </li> )
                }
            </ul>
        </>
    );
}
export default TuitsList