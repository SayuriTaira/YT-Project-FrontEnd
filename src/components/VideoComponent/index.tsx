import { useContext } from "react";
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";
import { MenuContexts } from "../../contexts/menuContexts";

function VideoComponent() {
    const { openMenu } = useContext(MenuContexts)

    return (
        <Container openMenu={openMenu}>
            <ImageBanner src="src/assets/image.png" openMenu={openMenu}></ImageBanner>
            <TitleContainer>
                <ChannelImage>LP</ChannelImage>
                <TextContainer>
                    <Title>Lofi Undertale - Beats To Stay Determined To</Title>
                    <TextCard>LewisPlaysGuitar</TextCard>
                    <TextCard>5,8 mi de visualizações - há 3 anos</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent