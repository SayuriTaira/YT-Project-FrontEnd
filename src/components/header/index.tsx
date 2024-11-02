import { ButtonContainer, ButtonIcon, CompositeDropdown, Container, HeaderButtons, LoginButton, LogoContainer, SearchButton, SearchContainer, SearchInput, SearchInputContainer } from "./styles"
import { HamburguerIcon, Logo, SearchIcon, MicIcon, NotificationIcon, VideoIcon, userIcon, configIcon, xIcon, searchKeyboardIcon } from "../../assets"
import { useContext, useEffect, useRef, useState } from "react"
import { MenuContexts } from "../../contexts/menuContexts"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/userContext"
import DropDownMenu from "../dropDownMenu"

function Header() {
    const { login } = useContext(UserContext)
    const { openMenu, setOpenMenu } = useContext(MenuContexts)

    const [ searchValue, setSearchValue ] = useState('')
    const [ selected, setSelected ] = useState('')

    const searchInputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        setSelected('')
    }, [location.pathname])

    const handleSearch = () => {
        if (searchValue) {
            navigate('/search')
            if (searchInputRef.current) {
                searchInputRef.current.blur(); // Garante que não será nulo
            }
        }
    }

    const clearSearch = () => {
        if(searchInputRef.current) {
            searchInputRef.current.value = ''
            setSearchValue('')
        }
    }

    const navigate = useNavigate()

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)}>
                    <ButtonIcon src={HamburguerIcon}></ButtonIcon>
                </ButtonContainer>

                <img src={Logo} alt="" style={{ cursor: 'pointer', width: '100px' }}/>
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" ref={searchInputRef} onChange={(e)=> setSearchValue(e.target.value)} onKeyDown={(e)=> e.key === 'Enter' && handleSearch()}></SearchInput>
                    {searchValue? (
                        <ButtonContainer style={{marginRight: '0px', width: '42px', height: '100%'}} onClick={() => clearSearch()}>
                            <ButtonIcon src={xIcon} style={{height: '18px', width: '18px'}}></ButtonIcon>
                        </ButtonContainer>
                        ) : <ButtonIcon src={searchKeyboardIcon} style={{height: '25px', width: '25px', cursor: 'pointer'}}></ButtonIcon>
                    }
                </SearchInputContainer>

                <SearchButton onClick={()=> handleSearch()}>
                    <ButtonIcon src={SearchIcon}></ButtonIcon>
                </SearchButton>

                <ButtonContainer style={{marginLeft: '15px'}} backgroundColor='#f2f2f2' backgroundHover="#e0e0e0">
                    <ButtonIcon src={MicIcon}></ButtonIcon>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                {login?
                    <>
                        <CompositeDropdown>
                            <ButtonContainer onClick={() => setSelected(selected === 'video'? '' : 'video')} style={{backgroundColor: selected === 'video'? '#f2f2f2' : ''}}>
                                <ButtonIcon src={VideoIcon}></ButtonIcon>
                            </ButtonContainer>

                            {selected === 'video' && <DropDownMenu  selectedOption={selected}></DropDownMenu>}
                        </CompositeDropdown>

                        <ButtonContainer>
                            <ButtonIcon src={NotificationIcon}></ButtonIcon>
                        </ButtonContainer>

                        <CompositeDropdown>
                            <ButtonContainer onClick={() => setSelected(selected === 'user'? '' : 'user')} style={{backgroundColor: '#f2f2f2'}}>ST</ButtonContainer>
                            
                            {selected === 'user' && <DropDownMenu selectedOption={selected}></DropDownMenu>}
                        </CompositeDropdown>
                    </>
                :
                    <>
                        <CompositeDropdown>
                            <ButtonContainer onClick={() => setSelected(selected === 'config'? '' : 'config')} style={{backgroundColor: selected === 'config' ? '#f2f2f2' : ''}}>
                                <ButtonIcon src={configIcon}></ButtonIcon>
                            </ButtonContainer>

                            {selected === 'config' && <DropDownMenu selectedOption={selected}></DropDownMenu>}
                        </CompositeDropdown>

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