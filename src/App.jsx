import React, {useRef, useCallback, useState, useMemo, useEffect} from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/addons'
import Scrollbar from "react-scrollbars-custom";

import {MenuContainer} from "./components/menu/menu-container";
import {MenuSocial} from "./components/menu/menu-social";
import {MenuLogo} from "./components/menu/menu-logo";
import {CardContainer} from "./components/content/card-container";
import {Container} from "./components/container";
import {FirstPage} from "./components/first-page/first-page";
import {MenuNavigation} from "./components/menu/menu-navigation";

import {pages} from "./constants";

// Loads fonts and other global css
import './App.css';

export const appContext = React.createContext();

const App = () => {
    const parallax = useRef();
    // Active page state
    const [page, setPage] = useState(0);
    // Function used to track active page
    const updateActive = useCallback(
        () => {
            setPage(Math.round(parallax.current.current / parallax.current.space));
        },
        [parallax]
    );
    // Function used to change page
    const changePage = useCallback(
        (page) => {
            if ((parallax.current)) {
                parallax.current.scrollTo(page);
            }
        },
        [parallax]
    );
    // Change page to hash value on init
    useMemo(() => {
        let page;

        if (window.location.hash) {
            page = pages.findIndex((item) => item === window.location.hash.toString().replace("#", ""));
        }

        if (page !== -1) {
            changePage(page);
        }
    }, []);
    // Update hash
    useEffect(() => {
        if (window.history.pushState) {
            window.history.pushState(null, null, '#' + pages[page]);
        } else {
            window.location.hash = '#' + pages[page];
        }
    }, [page]);

    return (
        <appContext.Provider value={{page: [page, setPage], changePage: changePage}}>
            <Container>
                <MenuContainer>
                    <MenuLogo>rasovica</MenuLogo>
                    <MenuNavigation/>
                    <MenuSocial/>
                </MenuContainer>
                <CardContainer onScroll={updateActive}>
                    <Scrollbar style={{height: "100vh"}}>
                        <Parallax pages={5} scrolling ref={parallax}>
                            <ParallaxLayer offset={0} speed={0}>
                                <FirstPage/>
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
                    </Scrollbar>
                </CardContainer>
            </Container>
        </appContext.Provider>
    );
};

export default App;
