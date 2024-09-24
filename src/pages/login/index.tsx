import { useContext, useState } from "react"
import { UserContext } from "../../contexts/userContext"
import { ActionButton, ButtonContainer, CheckboxContainer, CheckboxInput, Container, Content, Icon, InputContainer, InputLogin, InputWrapper, LabelLogin, Subtext, Title, TitleContainer } from "./styles"
import googleIcon from '../../assets/google.png'
import { useNavigate } from "react-router-dom"

function Login() {
    const { handleLogin } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const toggleShowPassword = (event: any) => {
        setShowPassword(event.target.checked)
    }

    const handleSubmit = () => {
        handleLogin(email, password); 
    };

    return(
        <Container>
            <Content>
                <TitleContainer>
                    <Icon src={googleIcon}></Icon>
                    <Title>Fazer login</Title>
                    <Subtext>Prosseguir no Youtube</Subtext>
                </TitleContainer>

                <InputContainer>
                    <InputWrapper>
                        <InputLogin type="email" value={ email } placeholder="" id="inputEmail" onChange={(e) => setEmail(e.target.value)}></InputLogin>
                        <LabelLogin htmlFor="inputEmail">E-mail</LabelLogin>
                    </InputWrapper>

                    <InputWrapper>
                        <InputLogin type= { showPassword ? 'text' : "password" } placeholder="" value={ password } onChange={(e) => setPassword(e.target.value)}></InputLogin>
                        <LabelLogin htmlFor="inputEmail">Digite sua senha</LabelLogin>

                        <CheckboxContainer>
                            <CheckboxInput type="checkbox" checked={ showPassword } id="showPassword" onChange={ toggleShowPassword }></CheckboxInput>
                            <label htmlFor="showPassword">Mostrar senha</label>
                        </CheckboxContainer>
                    </InputWrapper>
                    
                    <ButtonContainer>
                        <ActionButton>Criar conta</ActionButton>
                        <ActionButton onClick={handleSubmit}>Próxima</ActionButton>
                    </ButtonContainer>
                </InputContainer>
            </Content>
        </Container>
    )
}

export default Login