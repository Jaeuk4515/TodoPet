import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 390px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

export const FooterItemWrapper = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => (props.active ? "black" : "#ADADAD")};
    cursor: pointer;
    text-align: center;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    & {
        svg {
            path {
                fill: ${(props) => (props.active ? "black" : "#ADADAD")};
                stroke: ${(props) => (props.active ? "black" : "#ADADAD")};
            }
        }
    }
`;

export const FooterText = styled.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 400;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;
