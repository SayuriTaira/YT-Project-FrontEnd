import { ButtonContainer, ButtonIcon, Container, HeaderButtons, LoginButton, LogoContainer, SearchButton, SearchContainer, SearchInput, SearchInputContainer } from "./styles"
import HamburguerIcon from '../../assets/hamburger.png'
import Logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import NotificationIcon from '../../assets/sino.png'
import VideoIcon from '../../assets/video.png'
import userIcon from '../../assets/userLogin.png'
import configIcon from '../../assets/config.png'
import { useContext } from "react"
import { MenuContexts } from "../../contexts/menuContexts"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/userContext"

function Header() {
    const { login, logOut } = useContext(UserContext)
    const { openMenu, setOpenMenu } = useContext(MenuContexts);
    const navigate = useNavigate()

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)}>
                    <ButtonIcon src={HamburguerIcon}></ButtonIcon>
                </ButtonContainer>

                    <img src={Logo} alt="" style={{ cursor:'pointer', width: '100px' }}/>
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar"></SearchInput>
                </SearchInputContainer>

                <SearchButton>
                    <ButtonIcon src={SearchIcon}></ButtonIcon>
                </SearchButton>

                <ButtonContainer style={{marginLeft: '15px'}} backgroundColor='#f2f2f2' backgroundHover="#e0e0e0">
                    <ButtonIcon src={MicIcon}></ButtonIcon>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                {login?
                    <>
                        <ButtonContainer>
                            <ButtonIcon src={VideoIcon}></ButtonIcon>
                        </ButtonContainer>

                        <ButtonContainer>
                            <ButtonIcon src={NotificationIcon}></ButtonIcon>
                        </ButtonContainer>

                        <ButtonContainer>ST</ButtonContainer>
                        <span onClick={() => logOut()}>Sair</span>
                    </>
                :
                    <>
                        <ButtonContainer>
                            <ButtonIcon src={configIcon}></ButtonIcon>
                        </ButtonContainer>

                        <LoginButton onClick={() => navigate('/login')}>
                            <ButtonIcon src={userIcon}></ButtonIcon>
                            <span>Fazer Login</span>
                        </LoginButton>
                    </>
                }
            </HeaderButtons>

        </Container>
    )
}

export default Header