import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 600px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 15px 0px;
    margin-top: 25px;
`

export const TitleContainer = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    margin-left: 10px;
`

export const ShortsIcon = styled.img`
    width: 22px;
    height: 22px;
`

export const Title = styled.span`
    font-size: 19px;
    font-weight: bold;
    margin-left: 8px;
`

export const ShortsContainer = styled.div`
    display: flex;
    column-gap: 20px;
    margin-top: 30px;
    `

export const ShortsContent = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export const ShortsBanner = styled.img<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '250px' : '240px'};
    height: ${({ openMenu }) => openMenu? '450px' : '420px'};
    background-color: black;
    border-radius: 15px;
`

export const ShortsTitle = styled.span`
    font-size: 16.3px;
    font-weight: 500;
    margin-top: 5px;
`

export const ShortsTextCard = styled.span`
    font-weight: 400;
    font-size: 14px;
`