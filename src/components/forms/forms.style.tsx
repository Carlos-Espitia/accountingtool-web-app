import styled from 'styled-components'
import v from '../../scss/Variables.styles'

export const Form = styled.div`
    display: block;
    position: absolute;

    top: 200px;
    left: 50%;
    transform: translate(-50%);

    width: 450px;
    min-width: 400px;
    max-width: 600px;
    background: ${v.color2};
    border-radius: 10px;
    padding: 30px 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    /* border: 1vw solid blue; */
`;

//////////////////////////////////////////////////////////////////////

export const FormHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 13px;
    /* border: 1px solid blue; */
`;

export const FormTitle = styled.div`
    display: inline-block;
    position: relative;
    color: white;
    font-size: 24px;
    font-weight: 600;
    /* border: 1vw solid blue; */
`;

export const FormSub = styled.a`
    display: inline-block;
    position: relative;
    top: 2px;
    color: ${v.color3};
    font-size: 18px;
    font-weight: 600;
    margin-left: auto; // move div to right
    cursor: pointer;

    /* border: 1vw solid blue; */
`;

//////////////////////////////////////////////////////////////////////


export const FLabel = styled.label`
    display: block;
    font-size: 18px;
    font-weight: 600;
    /* margin-top: 30px; */
    margin-left: 0px;
    margin-bottom: calc(8px / 4);
`;

//////////////////////////////////////////////////////////////////////


export const FInput = styled.input`
    outline: none;
    height: 45px;
    width: 100%;
    margin-top: 15px;
    padding: 8px;
    font-size: 14px;
    border-radius: 6px;
    border: 3px solid grey;
`;

//////////////////////////////////////////////////////////////////////


export const FButton = styled.button`
    width: 100%;
    background: ${v.color3};
    color: white;
    padding: 8px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border-width: 0;
    margin: 20px auto;
    cursor: pointer;
`;

//////////////////////////////////////////////////////////////////////

export const GoogleSignIn = styled.button`
    height: 50px;
    width: 100%;
    background: white;
    color: black;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-width: 0;
    margin-top: 20px;
    cursor: pointer;
`;

export const GoogleIcon = styled.div`
    position: relative;
    top: 2px;
    margin-right: 5px;
    font-size: 1.3rem;
`;

//////////////////////////////////////////////////////////////////////

export const Seperate = styled.div`
    height: 2px;
    width: 100%;
    background-color: grey;
`;

//////////////////////////////////////////////////////////////////////
