import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 55%;
    height: 420px;
    background-color: white;
    padding: 35px 45px;
    border-radius: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
`

export const Icon = styled.img`
    width: 40px;
    height: 40px;
`

export const Title = styled.h1`
    font-size: 43px;
    font-weight: 400;
`

export const Subtext = styled.span`
    font-size: 16px;
    position: relative;
    bottom: 20px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`

export const InputWrapper = styled.div`
    position: relative;
    margin-top: 80px;

    &:nth-child(2) {
        margin-top: 0px;
    }
`

export const InputLogin = styled.input`
    width: 400px;
    height: 50px;
    font-size: 15px;
    border: 1px solid #4d4d4d;
    border-radius: 5px;
    padding: 0 15px;
    background-color: #fff;

    &:focus {
        outline: 1.2px solid #005ce6;
    }
    
    &:not(:placeholder-shown) ~ label {
        top: -10px;
        font-size: 14px;
    }
    
    &:focus ~ Label{
        top: -10px;
        font-size: 14px;
        color: #005ce6;
    }
`

export const LabelLogin = styled.label`
    position: absolute;
    color: #595959;
    top: 13px;
    left: 15px;
    pointer-events: none;
    background-color: #fff;
    font-size: 17px;
    padding: 0 4px;
    transition: .2s ease all;
`

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`

export const CheckboxInput = styled.input`
    cursor: pointer;  
    width: 17px;
    height: 17px;
    border: 2px solid #262626;
    border-radius: 3px; 

    &:hover {
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1); 
        transition: box-shadow 0.3s ease;
        border-radius: 50%; 
    }

    ~label {
        cursor: pointer;  
        margin-left: 15px;
        font-size: 14px;
        font-weight: 500;
    }

`

export const ButtonContainer = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
`

export const ActionButton = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: #0b57d0;
    font-weight: 600;
    cursor: pointer;
    padding: 0 10px;
    font-size: 13.5px;

    &:hover {
        background-color: #0c4db3;
    }

    &:nth-child(1) {
        background-color: #fff;
        color: #3785fa;
    }

    &:nth-child(1):hover {
        background-color: #f2f2f2;
    }
`
