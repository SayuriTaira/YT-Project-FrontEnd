import styled from "styled-components";

export const ImageBanner = styled.img<{ openMenu: boolean, isSearchPage: boolean }>`
    width: ${({openMenu, isSearchPage}) => isSearchPage? '480px' : openMenu? '388px' : '346px'};
    height: ${({openMenu, isSearchPage}) => isSearchPage? '270px' : openMenu? '220px' : '200px'};
    border-radius: 13px;
    transition: 0.3s;   
`

export const Container = styled.div<{ openMenu: boolean, isSearchPage: boolean }>`
    width: auto;
    height: auto;
    display: ${({isSearchPage}) => isSearchPage? 'flex' : 'block'};
    cursor: pointer;

    &:hover {
        ${ImageBanner}:first-child {
            border-radius: 0%;
        }
    }
`

export const TitleContainer = styled.div<{ isSearchPage: boolean }>`
    display: flex;
    margin-top: 5px;
    margin-left: ${({isSearchPage}) => isSearchPage? '7px' : '0'};
`

export const ChannelContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

export const ChannelImage = styled.div<{ isSearchPage: boolean }>`
    width: ${({isSearchPage}) => isSearchPage? '25px' : '40px'};
    height: ${({isSearchPage}) => isSearchPage? '25px' : '40px'};
    border-radius: 50%;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({isSearchPage}) => isSearchPage? '13px' : 'auto'};
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

export const Title = styled.span<{ isSearchPage: boolean }>`
    font-weight: ${({isSearchPage}) => isSearchPage? '500' : 'bold'};
    font-size: ${({isSearchPage}) => isSearchPage? '16.5px' : '15px'};
`

export const TextCard = styled.span`
    font-size: 14px;
`