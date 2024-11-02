import { useContext } from "react"
import { Container, ShortsBanner, ShortsContainer, ShortsContent, ShortsIcon, ShortsTextCard, ShortsTitle, Title, TitleContainer } from "./styles"
import { MenuContexts } from "../../contexts/menuContexts"
import imageShorts from "../../assets/imageShorts.png"

function ShortsComponent() {
const { openMenu } = useContext(MenuContexts)
const shorts = openMenu? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <Container>
                <TitleContainer>
                    <ShortsIcon src="src/assets/youtube-shorts-logo.png"></ShortsIcon>
                    <Title>Shorts</Title>
                </TitleContainer>
                
                <ShortsContainer>
                    {shorts.map(() => (
                        <ShortsContent>
                            <ShortsBanner src={imageShorts} openMenu={openMenu}></ShortsBanner>
                            <ShortsTitle>coinflip.</ShortsTitle>
                            <ShortsTextCard>1,6 mi de visualizações</ShortsTextCard>
                        </ShortsContent>
                    ))}
                </ShortsContainer>
            </Container>
        </>
    )
}

export default ShortsComponent