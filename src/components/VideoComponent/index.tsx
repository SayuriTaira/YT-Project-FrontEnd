import { useContext } from "react";
import { ChannelContainer, ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";
import { MenuContexts } from "../../contexts/menuContexts";
import videoImage from "../../assets/image.png"

function VideoComponent() {
    const { openMenu } = useContext(MenuContexts)
    const isSearchPage = location.pathname === '/search'

    return (
        <Container openMenu={openMenu} isSearchPage={isSearchPage}>
            <ImageBanner src={videoImage} openMenu={openMenu} isSearchPage={isSearchPage}></ImageBanner>
            <TitleContainer isSearchPage={isSearchPage}>
                {isSearchPage? (
                    <TextContainer>
                        <Title isSearchPage={isSearchPage}>Lofi Undertale - Beats To Stay Determined To</Title>
                        <TextCard style={{fontSize: '12.5px'}}>5,8 mi de visualizações - há 3 anos</TextCard>

                        <ChannelContainer>
                            <ChannelImage isSearchPage={isSearchPage}>LP</ChannelImage>
                            <TextCard style={{fontSize: '13px', marginLeft: '5px'}}>LewisPlaysGuitar</TextCard>
                        </ChannelContainer>
                    </TextContainer>
                ) :
                <>
                <ChannelImage isSearchPage={isSearchPage}>LP</ChannelImage>
                <TextContainer>
                    <Title isSearchPage={isSearchPage}>Lofi Undertale - Beats To Stay Determined To</Title>
                    <TextCard>LewisPlaysGuitar</TextCard>
                    <TextCard>5,8 mi de visualizações - há 3 anos</TextCard>
                </TextContainer>
                </>
                }
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent