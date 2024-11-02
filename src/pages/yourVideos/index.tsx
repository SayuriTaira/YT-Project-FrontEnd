import { ActionBar, ActionItem, Button, HeaderButtonGroup, ButtonContent, Container, Content, Modal, ModalContent, NoContentContainer, NoContentText, ModalTitle, TitleContainer, ModalButton, ModalMainContent, ModalText } from "./styles"
import { feedback, noContent, upload, xIcon } from "../../assets"
import { useState } from "react"

const itens = ['Vídeos', 'Shorts', 'Ao vivo', 'Postagens', 'Playlists']

function YourVideos() {
    const [ openModal, setOpenModal ] = useState(false)
    const [ selectedCategory, setSelectedCategory ] = useState('Vídeos')

    return (
        <Container>
            <h2>Conteúdo do canal</h2>

            <ActionBar>
                {itens.map((item) => {
                    return (
                        <ActionItem onClick={() => setSelectedCategory(item)} selectedCategory={item === selectedCategory}>{item}</ActionItem>
                    )
                })}
            </ActionBar>

            <Content>
                <NoContentContainer>
                    <img src={noContent}/>
                    <NoContentText>Nenhum conteúdo disponível</NoContentText>
                    <Button onClick={() => setOpenModal(true)}>Enviar vídeos</Button>  
                </NoContentContainer>
            </Content>

            <Modal openModal={openModal}>
                <ModalContent>
                    <TitleContainer>
                        <ModalTitle>Enviar Vídeos</ModalTitle>

                        <HeaderButtonGroup>
                            <ButtonContent> <img src={feedback} style={{height: '24px'}}/> </ButtonContent>
                            <ButtonContent onClick={() => setOpenModal(false)}> <img src={xIcon} style={{height: '15px'}}/> </ButtonContent>
                        </HeaderButtonGroup>
                    </TitleContainer>

                    <ModalMainContent>
                        <ModalButton> <img src={upload} style={{height: '45px'}}/> </ModalButton>

                        <ModalText>Arraste e solte os arquivos de vídeo para fazer o envio</ModalText>
                        <ModalText>Seus vídeos ficarão privados até que você os publique.</ModalText>

                        <Button style={{width: '160px'}}>Selecionar arquivos</Button>
                    </ModalMainContent>
                </ModalContent>
            </Modal>
        </Container>
    )
}

export default YourVideos