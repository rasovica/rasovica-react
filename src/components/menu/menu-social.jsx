import React from "react";
import styled from 'styled-components';
import {font_size, gray, white} from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Social = styled.div`
   flex-grow: 1;
   background-color: ${white};
   display: flex;
   justify-content: center;
   flex-direction: column;
   
   svg {
    height: ${font_size[2]} !important;
    width: ${font_size[2]} !important;
    color: ${gray};
    margin: 0 5px;
   }
   
   .grow-1 {
      flex-grow: 1;
   }
   
   .grow-4 {
      flex-grow: 4;
   } 
   
   .center {
      flex-grow: 0;
      display: flex;
      justify-content: center;
   }
`;

export const MenuSocial = () => {
    return (
        <Social>
            <div className={"grow-4"}/>
            <div className={"center"}>
                <div>
                    <a href={"https://github.com/rasovica"} target={"_blank"} rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href={"https://gitlab.com/rasovica"} target={"_blank"} rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGitlab}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/raslav-milutinovic/"} target={"_blank"} rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>
            </div>
            <div className={"grow-1"}/>
        </Social>
    )
};