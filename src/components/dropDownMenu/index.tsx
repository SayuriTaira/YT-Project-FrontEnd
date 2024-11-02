import { Container, DropDownContainer, DropDownItem, OptionIcon, InfoContainer, UserContainer, UserName, ChannelLink } from "./styles"
import { dataIcon, moonIcon, translateIcon, secureIcon, internetIcon, keyboardIcon, settings, help, feedback, yourVideos, live, edit, google, yourChannel, logout, coin, YTStudio } from "../../assets"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"

interface DropDownItemType {
    name: string;
    iconPath: string;
    container: number;
    link?: string;
    performLogout?: () => void;
}

function DropDownMenu({ selectedOption }: { selectedOption: string }) {
    
    const navigate = useNavigate()
    const { logOut } = useContext(UserContext)

    const handleClick = (item: DropDownItemType) => {
        if (item.link) {
            navigate(item.link);
        } else if (item.performLogout) {
            item.performLogout();
            navigate('/')
        }
    };

    const dropDownItens: DropDownItemType[] = selectedOption === 'config'? [
        {
            name: 'Seus dados no Youtube',
            iconPath: dataIcon, 
            container: 1
        },
        {
            name: 'Aparência: claro',
            iconPath: moonIcon, 
            container: 1
        },
        {
            name: 'Idioma: Português',
            iconPath: translateIcon, 
            container: 1
        },
        {
            name: 'Modo restrito: desativado',
            iconPath: secureIcon, 
            container: 1
        },
        {
            name: 'Local: Brasil',
            iconPath: internetIcon, 
            container: 1
        },
        {
            name: 'Atalhos do teclado',
            iconPath: keyboardIcon, 
            container: 1
        },
        {
            name: 'Configurações',
            iconPath: settings, 
            container: 2
        },
        {
            name: 'Ajuda',
            iconPath: help, 
            container: 3
        },
        {
            name: 'Enviar feedback',
            iconPath: feedback, 
            container: 3
        }
    ] : selectedOption === 'video'? [
        {
            name: 'Enviar vídeo',
            iconPath: yourVideos, 
            container: 1,
            link: '/yourVideos'
        },
        {
            name: 'Transmitir ao vivo',
            iconPath: live, 
            container: 1
        },
        {
            name: 'Criar postagem',
            iconPath: edit, 
            container: 1
        }
    ] : [
        {
            name: 'Conta do Google',
            iconPath: google, 
            container: 1
        },
        {
            name: 'Mudar de conta',
            iconPath: yourChannel, 
            container: 1
        },
        {
            name: 'Sair',
            iconPath: logout, 
            container: 1,
            performLogout: () => logOut()
        },
        {
            name: 'YoutubeStudio',
            iconPath: YTStudio, 
            container: 2
        },
        {
            name: 'Compras e assinaturas',
            iconPath: coin, 
            container: 2
        },
        {
            name: 'Seus dados no Youtube',
            iconPath: dataIcon, 
            container: 3
        },
        {
            name: 'Aparência: claro',
            iconPath: moonIcon, 
            container: 3
        },
        {
            name: 'Idioma: Português',
            iconPath: translateIcon, 
            container: 3
        },
        {
            name: 'Modo restrito: desativado',
            iconPath: secureIcon, 
            container: 3
        },
        {
            name: 'Local: Brasil',
            iconPath: internetIcon, 
            container: 3
        },
        {
            name: 'Atalhos do teclado',
            iconPath: keyboardIcon, 
            container: 3
        },
        {
            name: 'Configurações',
            iconPath: settings, 
            container: 4
        },
        {
            name: 'Ajuda',
            iconPath: help, 
            container: 5
        },
        {
            name: 'Enviar feedback',
            iconPath: feedback, 
            container: 5
        }
    ]
    
    const dropDownContainers = selectedOption === 'config'? [1, 2, 3] : selectedOption === 'video'? [1] : [1, 2, 3, 4, 5]

    return (
        <Container selectedOption={selectedOption}>
            {selectedOption === 'user' &&
            <DropDownContainer style={{display: 'flex', padding: '15px 20px'}}>
                <UserContainer>ST</UserContainer>

                <InfoContainer>
                    <UserName>Sayuri Taira</UserName>
                    <UserName>@sayuritaira</UserName>
                    <ChannelLink>Acesse seu canal</ChannelLink>
                </InfoContainer>
            </DropDownContainer>}
            {dropDownContainers.map((container) => {
                const filteredItens = dropDownItens.filter((item) => item.container === container)

                return (
                    <DropDownContainer>
                        {filteredItens.map((item) => {
                            return (
                                <DropDownItem onClick={()=> handleClick(item)}>
                                    <OptionIcon src={item.iconPath}></OptionIcon>
                                    <span>{item.name}</span>
                                </DropDownItem>
                            )
                        })}
                    </DropDownContainer>  
                )
            })}
        </Container>
    )
}

export default DropDownMenu