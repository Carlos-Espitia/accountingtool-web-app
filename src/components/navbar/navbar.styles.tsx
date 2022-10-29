import styled from 'styled-components'
import v from '../../scss/Variables.styles'

export const Margin = styled.div`
    position: relative;
    height: 70px;
`;

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    z-index: 100;
    align-items: center;
    width: 100%;
    padding: 0px 15px;
    /* padding-left: $navSidePaddings; */
    background-color: ${v.color2};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
`;

export const BrandTitle = styled.div`
    margin: auto 0;
    /* outline: 1px solid white; */


    .svg {
        display: inline-block;
        position: relative;
        font-size: 3rem;
        bottom: -3px;

        height: 3rem;
        width: fit-content;
        line-height: 0%; //removes passing from icon

        /* outline: 1px solid white; */
    }
    
    .text {
        position: relative;
        color: white;
        position: relative;
        font-size: 1.5rem;
        font-weight: 600;
        margin-left: .3rem;
        top: -14px;
        /* outline: 1px solid white; */
    }
`;