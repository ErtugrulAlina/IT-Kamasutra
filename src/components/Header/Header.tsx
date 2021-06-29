import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src={"https://w7.pngwing.com/pngs/240/131/png-transparent-logo-lion-red-gradient-lionhead-animals-sport-heart.png"}
                alt=""/>
        </header>
    )
};
export default Header;