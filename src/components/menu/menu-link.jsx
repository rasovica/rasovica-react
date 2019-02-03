import styled from 'styled-components';
import {black, gray, red, white} from "../../constants";

export const MenuLink = styled.div`
    flex-grow: 0;
    
    // Link settings
    a {
        font-size: 20px;
        font-weight: normal;
        font-family: Gotham Book, sans-serif;
        text-transform: capitalize;
        display: block;
        color: ${gray};
        text-align: center;
        margin: 10px 0;
        line-height: 25px;
        text-decoration: none;
        // Hover fill from left to right
        background: linear-gradient(to right, ${red} 25%, ${white} 25%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all .5s ease-out;
    }
    
    .active {
        background-position: left bottom;
        color: ${black};  
    }
`;