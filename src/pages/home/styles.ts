import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    padding: ${({openMenu}) => openMenu? '0px 35px' : '0px 20px'};
`

export const Content = styled.div<{ openMenu: boolean }>`
    width: calc(100% - 50px);
    display: grid;
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    padding: ${({openMenu}) => openMenu? '15px 0px' : '20px 0px'};
    row-gap: 50px;
    column-gap: 15px;
`