import React, {useRef, useCallback, useState} from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import './App.css';
import {MenuLink} from "./components/menu/menu-link";
import {MenuContainer} from "./components/menu/menu-container";
import {MenuSocial} from "./components/menu/menu-social";
import {MenuLogo} from "./components/menu/menu-logo";
import {CardContainer} from "./components/content/card-container";
import {Container} from "./components/container";
import {Frontpgage} from "./components/content/front-page";

const App = () => {
    const parallax = useRef();
    const [page, setPage] = useState(0);
    const updateActive = useCallback(
        () => {
            setPage(Math.round(parallax.current.current / parallax.current.space));
        },
        [parallax]
    );

    return (
        <Container>
            <MenuContainer>
                <MenuLogo>a</MenuLogo>
                <MenuLink>
                    <a className={page === 0 ? 'active' : null}>Home</a>
                    <a className={page === 1 ? 'active' : null}>About</a>
                    <a className={page === 2 ? 'active' : null}>Service</a>
                    <a className={page === 3 ? 'active' : null}>Portfolio</a>
                    <a className={page === 4 ? 'active' : null}>Contact</a>
                </MenuLink>
                <MenuSocial>a</MenuSocial>
            </MenuContainer>
            <CardContainer onScroll={updateActive}>
                <Parallax pages={5} scrolling ref={parallax}>
                    <ParallaxLayer offset={0} speed={0}>
                        <Frontpgage/>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0}>
                        About
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0}>
                        Service
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0}>
                        Portfolio
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={0}>
                        Contact
                    </ParallaxLayer>
                </Parallax>
            </CardContainer>
        </Container>
    );
};

export default App;
