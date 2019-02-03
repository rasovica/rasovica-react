import styled from 'styled-components';
import {white} from "../../constants";

export const MenuContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${white};
    
    @media (max-width: 920px) {
       transform: translate(-100%);
       
       .open {
            margin-left: 0;
       }
    }   
`;