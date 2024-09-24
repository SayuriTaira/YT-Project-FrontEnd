import styled from "styled-components";

export const ImageBanner = styled.img<{ openMenu: boolean }>`
    width: 100%;
    height: ${({openMenu}) => openMenu? '220px' : '200px'};
    border-radius: 13px;
    transition: 0.3s;   
`

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({openMenu}) => openMenu? '370px' : '350px'};
    height: auto;
    cursor: pointer;
    
    &:hover {
        ${ImageBanner}:first-child {
            border-radius: 0%;
        }
    }
    `

export const TitleContainer = styled.div`
    display: flex;
    margin-top: 5px;
`

export const ChannelImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    
`

export const Title = styled.span`
    font-weight: bold;
    font-size: 15px;
`

export const TextCard = styled.span`
    font-size: 14px;
`