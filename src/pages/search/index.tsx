import TopBar from "../../components/topBar"
import VideoComponent from "../../components/VideoComponent"
import { ButtonIcon, Container, Content, FilterButton, TopBarContent, VideosContainer } from "./styles"
import filterIcon from '../../assets/filter.png'

function Search() {
    return (
        <Container>
            <Content>
                <TopBarContent>
                    <TopBar></TopBar>

                    <FilterButton>
                        <span>Filtros</span>
                        <ButtonIcon src={filterIcon}></ButtonIcon>
                    </FilterButton>
                </TopBarContent>

                <VideosContainer>
                    <VideoComponent></VideoComponent>
                    <VideoComponent></VideoComponent>
                    <VideoComponent></VideoComponent>
                    <VideoComponent></VideoComponent>
                </VideosContainer>
            </Content>
        </Container>
    )
}

export default Search 