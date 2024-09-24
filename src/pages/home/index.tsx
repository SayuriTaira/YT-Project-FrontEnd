import { useContext } from "react";
import TopBar from "../../components/topBar"
import VideoComponent from "../../components/VideoComponent"
import { MenuContexts } from "../../contexts/menuContexts";
import { Container } from "./styles"
import ShortsComponent from "../../components/shortsComponent";

function Home() {
  const { openMenu } = useContext(MenuContexts);
  const videos = openMenu? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <TopBar></TopBar>
      
      <Container openMenu={openMenu}>
        {videos.map(() => (
          <VideoComponent></VideoComponent>
        ))}
      </Container>
      
      <ShortsComponent></ShortsComponent>
    </>
  )
}

export default Home