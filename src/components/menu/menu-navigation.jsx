import {MenuLink} from "./menu-link";
import React, {useContext} from "react";
import {appContext} from "../../App";
import {pages} from "../../constants";

export const MenuNavigation = () => {
    const context = useContext(appContext);

    return (
        <MenuLink>
            {
                pages.map((item, index) => {
                    return <a href={"#" + item} onClick={() => context.changePage(index)} className={context.page[0] === index ? 'active' : null} key={index}>{item}</a>
                })
            }
        </MenuLink>
    )
};
