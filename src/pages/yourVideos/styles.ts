import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    padding: 5px 30px;
    border-left: 1px solid #f2f2f2;
`

export const Content = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ActionBar = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    border-bottom: 1px solid #d9d9d9;
`

export const ActionItem = styled.div<{ selectedCategory: boolean }>`
    padding: 10px 0;
    color: ${({selectedCategory}) => selectedCategory? '#000' : '#737373'};
    font-size: 15px;
    font-weight: 500;
    border-bottom: ${({selectedCategory}) => selectedCategory? '2px solid #000' : ''};
    cursor: pointer;
`

export const NoContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NoContentText = styled.span`
    font-size: 15px;
    color: #4d4d4d;
`

export const Button = styled.button`
    width: 120px;
    height: 36px;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 20px;
`

export const Modal = styled.div<{ openModal: boolean }>`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({openModal}) => openModal? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.div`
    width: 900px;
    height: 800px;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 30px;
    border-bottom: 1px solid #cccccc;
`

export const ModalTitle = styled.span`
    font-size: 19px;
    font-weight: 500;
`

export const HeaderButtonGroup = styled.div`
    display: flex;
    gap: 5px;
`

export const ButtonContent = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        background-color: #f2f2f2;
    }
`

export const ModalMainContent = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalButton = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalText = styled.span`
    font-size: 14.7px;
    font-weight: 500;
    margin-top: 20px;
    
    &:nth-of-type(2) {
        font-size: 13px;
        color: #555;
        margin-top: 2px;
    }
`