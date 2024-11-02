import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
` 

export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
`

export const TopBarContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FilterButton = styled.div`
    width: 85px;
    height: 35px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    border-radius: 40px;
    background-color: #fff;
    font-weight: 600;
    font-size: 14px;
    padding: 0px 10px;

    &&:hover {
        background-color: #f2f2f2;
    }
`

export const ButtonIcon = styled.img`
    width: 20px;
    height: 22px;
`

export const VideosContainer = styled.div`
    display: grid;
    row-gap: 16px;
    padding-bottom: 16px;
`