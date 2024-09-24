import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({openMenu}) => openMenu? '270px': '75px'};
    height: calc(100vh - 55px);
    background-color: #fff;
    box-sizing: border-box;
    padding: 5px 15px 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: sticky;
    top: 55px;
    margin-top: 55px;
    scrollbar-gutter: stable;

    &:hover {
        overflow-y: auto;
    }
    `

export const MenuItem = styled.div<{ openMenu: boolean, selectedMenuItem: boolean }>`
    width: 91%;
    min-height: ${({openMenu}) => openMenu? '40px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};
    flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
    background-color: ${({openMenu, selectedMenuItem}) => openMenu&&selectedMenuItem? '#f2f2f2' : '#fff'};
    
    span {
        margin-left: ${({openMenu}) => openMenu? '25px' : '0'};
        font-size: ${({openMenu}) => openMenu? '14px' : '10px'};
        font-weight: ${({selectedMenuItem}) => selectedMenuItem? '700' : '500'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &:hover {
        background-color: #f2f2f2;
    }
` 

export const MenuContainer = styled.div<{ openMenu: boolean }>`
    width: 98%;
    display: flex;
    flex-direction: column;
    border-bottom: ${({openMenu}) => openMenu? '1px solid #f2f2f2' : 'none'};
    align-items: center;
    padding: ${({openMenu}) => openMenu? '10px 0' : '0'};

    &:nth-child(n+3) {
        display: ${({openMenu}) => openMenu? 'flex' : 'none'};
    }

    &:nth-child(2) {
        ${MenuItem}:nth-child(n+3) {
            display: ${({openMenu}) => openMenu? 'flex' : 'none'};
        }
    }
`
export const TitleContainer = styled.div<{ containerTitle: any, openMenu: boolean }>`
    width: 95%;
    height: 20px;
    align-items: center;
    padding: 10px 0;
    display: ${({containerTitle, openMenu}) => containerTitle&&openMenu? 'flex' : 'none'};
`

export const ButtonIcon = styled.img`
    width: 20px;
`