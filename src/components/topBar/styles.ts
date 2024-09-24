import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: 100%;
    height: 32px;
    background-color: #fff;
    padding: ${({openMenu}) => openMenu? '15px 30px' : '15px 20px'};
    display: flex;
    column-gap: 20px;
`

export const Category = styled.div<{ selectedCategory: boolean }>`
    width: auto;
    height: 100%;
    border-radius: 10px;
    background-color: ${({selectedCategory}) => selectedCategory? 'black' : '#f2f2f2'};
    color: ${({selectedCategory}) => selectedCategory? '#fff' : 'black'};
    font-size: 15px;
    font-weight: 500;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${({selectedCategory}) => selectedCategory? 'none' : '#e6e6e6'};
    }
`