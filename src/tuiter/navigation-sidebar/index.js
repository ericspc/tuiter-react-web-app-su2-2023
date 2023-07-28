import React from "react";
import { Link, useLocation } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse,
faHashtag,
faBell,
faEnvelope,
faBookmark,
faList,
faUser,
faCommentDots} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
    const icons = [<FontAwesomeIcon icon={faHouse} size={"xs"} />,
        <FontAwesomeIcon icon={faHashtag} size={"xs"} />,
        <FontAwesomeIcon icon={faBell} size={"xs"} />,
        <FontAwesomeIcon icon={faEnvelope} size={"xs"} />,
        <FontAwesomeIcon icon={faBookmark} size={"xs"} />,
        <FontAwesomeIcon icon={faList} size={"xs"} />,
        <FontAwesomeIcon icon={faUser} size={"xs"} />,
        <FontAwesomeIcon icon={faCommentDots} size={"xs"} />
    ]
    return (
        <div className="list-group">
            <div className="row">
                <div className="col-2">
                    {icons.map((icon) =>
                        <i className={`list-group-item text-capitalize ${active === icon ? "active" : ""}`}>
                            {icon}
                        </i>
                    )}
                </div>
                <div className="col-10">
                    {links.map((link) =>
                        <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                            {link}
                        </Link>
                    )}
                </div>
            </div>

        </div>
    );
};
export default NavigationSidebar;