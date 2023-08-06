import React from "react";
import { Link, useLocation } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {faHouse,
faHashtag,
faBell,
faEnvelope,
faBookmark,
faList,
faUser,
faCommentDots} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    return (
        <>
            <div className="list-group">
                <Link to={"/tuiter/home "} className={`list-group-item
                    ${active === "home" ? "active" : ""}`}><FontAwesomeIcon icon={faHouse} size={"sm"} />&nbsp;&nbsp;Home
                </Link>
                <Link to={"/tuiter/explore "} className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}><FontAwesomeIcon icon={faHashtag} size={"sm"} />&nbsp;&nbsp;&nbsp;Explore
                </Link>
                <Link to={"/tuiter/notifications "} className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}><FontAwesomeIcon icon={faBell} size={"sm"} />&nbsp;&nbsp;&nbsp;Notifications
                </Link>
                <Link to={"/tuiter/messages "} className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}><FontAwesomeIcon icon={faEnvelope} size={"sm"} />&nbsp;&nbsp;&nbsp;Messages
                </Link>
                <Link to={"/tuiter/bookmarks "} className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}><FontAwesomeIcon icon={faBookmark} size={"sm"} />&nbsp;&nbsp;&nbsp;&nbsp;Bookmarks
                </Link>
                <Link to={"/tuiter/lists "} className={`list-group-item 
                    ${active === "lists" ? "active" : ""}`}><FontAwesomeIcon icon={faList} size={"sm"} />&nbsp;&nbsp;&nbsp;Lists
                </Link>
                <Link to={"/tuiter/profile "} className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}><FontAwesomeIcon icon={faUser} size={"sm"} />&nbsp;&nbsp;&nbsp;Profile
                </Link>
                <Link to={"/tuiter/more "} className={`list-group-item
                    ${active === "more" ? "active" : ""}`}> <FontAwesomeIcon icon={faCommentDots} size={"sm"} />&nbsp;&nbsp;&nbsp;More
                </Link>
                {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
                {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
                {currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
            </div>
            </>
    );
};
export default NavigationSidebar;