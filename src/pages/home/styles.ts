import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: calc(100% - 50px);
    display: grid;
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    padding: ${({openMenu}) => openMenu? '10px 30px' : '20px 20px'};
    row-gap: 50px;
    column-gap: 15px;
`