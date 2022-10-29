import styled from "styled-components";
import v from "../../scss/Variables.styles";

const break1 = "1300px"
const break2 = "750px"


export const HeroSection = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: content;
    height: 450px;
    width: 100%;
    padding: 0px 10%;
    background-color: #ffffff;


    @media (max-width: ${break1}) {
        justify-content: center
    }
    /* outline: blue solid 5px; */

`;

export const Container = styled.div`
    /* display: block; */
    position: relative;


    @media (max-width: 850px) {
        align-items: center;
        justify-content: center;
        min-width: 0px;
    }

    @media (max-width: 1050px) {
        margin: 0px 0px 0px 0px;
    }

    height: 60%;
    width: 600px;
    min-width: 600px;
    margin: 0px 10px 0px 0px;

    padding: 10px 20px;
    background-color: #d9d9d9;
    border-radius: 10px;
    /* outline: blue solid 1px; */
`;

export const Slogan = styled.div`
    display: inline-block;
    position: relative;
    overflow: hidden;

    @media (max-width: ${break1}) {
        text-align: center;
    }

    @media (max-width: ${break2}) {
        padding-top: 20px;
        text-align: center;
        font-size: 1.8rem;
    }

    height: 60%;
    width: auto;
    font-size: 2.5rem;
    font-weight: 900;
    color: #266b55;
    margin-bottom: 2.5%;

    /* outline: blue solid 1px; */
`;

export const ContainerButtons = styled.div`
    display: flex;
    position: relative;

    height: auto;
    width: auto;

    @media (max-width: ${break1}) {
        align-items: center;
        justify-content: center
    }
    /* outline: blue solid 1px */

`;

export const Button = styled.button`
    display: inline-block;
    position: relative;

    height: 65px;
    width: 175px;

    padding: 8px;
    border-radius: 4px;
    border-width: 0;

    background: ${v.color3};
    color: white;
    font-size: 1.1rem;

    justify-content: center;
    cursor: pointer;
`;

export const HeroIcon = styled.div`
    display: flex;
    position: relative;

    height: auto;
    width: 35vw;
    max-width: 700px;
    min-width: 500px;
    margin-left: auto;

    @media (max-width: ${break1}) {
        display: none;
    }

    @media (min-width: 1530px) {
        margin-left: auto;
    }
    /* @media (min-width: 1850px) {
        margin-left: 350px;
    } */
    line-height: 0%; //removes passing from icon
`;

////////////////
////////////////
////////////////


export const AboutSection = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 700px;
    width: 100%;
    padding: 0px 6.5%;
    background-color: #d9d9d9;
    /* outline: blue solid 1px; */
    
`;

export const TitleAboutSection = styled.div`
    display: flex;
    position: relative;
    width: auto;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 2.6rem;
    font-weight: 600;
    color: ${v.text};
    /* outline: blue solid 1px; */
`;

export const AboutContainer = styled.div`
    display: flex;
    position: relative;
    column-gap: 50px;
    height: 80%;
    width: 100%;

    @media (max-width: ${break1}) {
        justify-content: center
    }

    /* right: 30px; */
    /* outline: blue solid 1px; */
`;


export const AboutIcon = styled.div`
    display: flex;
    position: relative;

    height: 550px;
    width: 50%;
    

    @media (max-width: ${break1}) {
        display: none;
    }


    line-height: 0%; //removes passing from icon
    /* outline: blue solid 1px; */
`;


export const AboutSummary = styled.div`
    display: flex;
    position: relative;

    height: fit-content;
    min-height: 100%;
    width: 50%;
    text-align: center;
    justify-content: content;
    align-items: center;


    @media (max-width: ${break1}) {
        width: 95%;
        min-height: 80%;
    }

    @media (max-width: ${break2}) {
        font-size: 1.5rem;
    }



    padding: 10px 20px;
    background-color: #bebebe;
    border-radius: 15px;

    font-size: 1.9rem;
    font-weight: 600;
    color: ${v.text};
    /* outline: blue solid 1px */
`;