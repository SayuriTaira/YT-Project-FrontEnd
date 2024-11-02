import styled from "styled-components";

export const Container = styled.div<{ selectedOption: string }>`
    width: ${({selectedOption}) => selectedOption === 'video'? '210px' : '300px'};
    height: auto;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: absolute;
    top: 100%;
    right: 0;
    border-radius: 13px;
    margin-top: 5px;
    padding: 3px 0;
    box-sizing: border-box;
`

export const DropDownContainer = styled.div`
    height: auto;
    border-bottom: 1px solid #ebebeb;
    padding: 7px 0;
    box-sizing: border-box;
    
    &&:last-child {
        border: none;
    } 
`

export const DropDownItem = styled.div`
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer;

    span {
        margin-left: 15px;
        font-size: 15px;
    }

    &&:hover {
        background-color: #f2f2f2;
    }
`

export const OptionIcon = styled.img`
    width: 21px;
    height: 21px;
`

export const UserContainer = styled.div`
    width: 45px;
    height: 45px;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`

export const UserName = styled.span`
    font-weight: 500;
`

export const ChannelLink = styled.span`
    font-size: 14.5px;
    font-weight: 400;
    color: #0066ff;
    margin-top: 5px;
    cursor: pointer;
`