import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`
export const CompositeDropdown = styled.div`
    position: relative;
`

export const ButtonContainer = styled.div <{ backgroundHover?: string, backgroundColor?: string}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 0;
    cursor: pointer;
    background-color: ${({ backgroundColor }) => backgroundColor? backgroundColor : 0};

    &:hover {
        background-color: ${({ backgroundHover }) => backgroundHover? backgroundHover : '#f2f2f2'};
    }
`

export const ButtonIcon = styled.img`
    width: 19px;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SearchInputContainer = styled.div`
    width: 520px;
    height: 38px;
    border: 1px solid #d3d3d3;
    border-right: none;
    border-radius: 40px 0 0 40px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchInput = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    padding: 0px 10px;
    border-radius: 40px;
    outline: none;
    font-size: 16px;
`

export const SearchButton = styled.div`
    width: 65px;
    height: 38px;
    border-radius: 0 40px 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
    border: 1px solid #d3d3d3;
    cursor: pointer;

    &:hover {
        background-color: #ededed;
        border: 1px solid #c7c7c7;
    }
`

export const HeaderButtons = styled.div`
    width: auto;
    display: flex;
`

export const LoginButton = styled.div`
    width: 110px;
    height: 35px;
    border: 1px solid #dddddd;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #005ce6;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 0 5px;

    &:hover {
        background-color: #e6f3ff;
        border: 1px solid #e6f3ff;
    }
`