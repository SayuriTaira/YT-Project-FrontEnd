import { useContext, useEffect, useState } from "react"
import { ButtonIcon, Container, MenuContainer, MenuItem, TitleContainer} from "./styles"
import { MenuContexts } from "../../contexts/menuContexts"
import { clock, coursesClicked, feedback, fire, fireClicked, games, gamesClicked, help, helpClicked, history, home, homeClicked, courses, like, likeClicked, live, movies, moviesClicked, music, musicClicked, newspaper, newspaperClicked, playlists, podcast, podcastClicked, redFlag, redFlagClicked, settings, settingsClicked, shopping, shoppingClicked, sports, sportsClicked, subscribe, subscribeClicked, you, yourChannel, yourVideos, youtubeShorts, youtubeShortsClicked, youtube, youtubeKids, youtubeMusic, youtubeStudio } from '../../assets';
import { useNavigate } from "react-router-dom";

const itens = [
    {
      name: "Início",
      iconPath: home,
      activeIconPath: homeClicked,
      container: "inicial",
      link: "/"
    },
    {
      name: "Shorts",
      iconPath: youtubeShorts,
      activeIconPath: youtubeShortsClicked,
      container: "inicial"
    },
    {
      name: "Inscrições",
      iconPath: subscribe,
      activeIconPath: subscribeClicked,
      container: "inicial"
    },
    {
      name: "Você",
      iconPath: you,
      activeIconPath: you,
      container: "you",
      link: "/library"
    },
    {
      name: "Seu canal",
      iconPath: yourChannel,
      activeIconPath: yourChannel,
      container: "you",
    },
    {
      name: "Histórico",
      iconPath: history,
      activeIconPath: history,
      container: "you",
      link: "/history"
    },
    {
      name: "Playlists",
      iconPath: playlists,
      activeIconPath: playlists,
      container: "you"
    },
    {
      name: "Seus vídeos",
      iconPath: yourVideos,
      activeIconPath: yourVideos, 
      container: "you"
    },
    {
      name: "Assistir mais tarde",
      iconPath: clock,
      activeIconPath: clock, 
      container: "you"
    },
    {
      name: "Vídeos com 'Gostei'",
      iconPath: like,
      activeIconPath: likeClicked,
      container: "you"
    },
    {
      name: "Em alta",
      iconPath: fire,
      activeIconPath: fireClicked,
      container: "explore",
    },
    {
      name: "Shopping",
      iconPath: shopping,
      activeIconPath: shoppingClicked,
      container: "explore"
    },
    {
      name: "Música",
      iconPath: music,
      activeIconPath: musicClicked,
      container: "explore"
    },
    {
      name: "Filmes",
      iconPath: movies,
      activeIconPath: moviesClicked,
      container: "explore"
    },
    {
      name: "Ao vivo",
      iconPath: live,
      activeIconPath: live,
      container: "explore" 
    },
    {
      name: "Jogos",
      iconPath: games,
      activeIconPath: gamesClicked,
      container: "explore"
    },
    {
      name: "Notícias",
      iconPath: newspaper,
      activeIconPath: newspaperClicked,
      container: "explore"
    },
    {
      name: "Esportes",
      iconPath: sports,
      activeIconPath: sportsClicked,
      container: "explore"
    },
    {
      name: "Cursos",
      iconPath: courses,
      activeIconPath: coursesClicked,
      container: "explore"
    },
    {
      name: "Podcasts",
      iconPath: podcast,
      activeIconPath: podcastClicked,
      container: "explore"
    },
    {
      name: "YouTube Premium",
      iconPath: youtube,
      activeIconPath: youtube, 
      container: "more",
    },
    {
      name: "YouTube Studio",
      iconPath: youtubeStudio,
      activeIconPath: youtubeStudio,
      container: "more"
    },
    {
      name: "YouTube Music",
      iconPath: youtubeMusic,
      activeIconPath: youtubeMusic,
      container: "more"
    },
    {
      name: "YouTube Kids",
      iconPath: youtubeKids,
      activeIconPath: youtubeKids, 
      container: "more"
    },
    {
      name: "Configurações",
      iconPath: settings,
      activeIconPath: settingsClicked,
      container: "configs"
    },
    {
      name: "Histórico de denúncia",
      iconPath: redFlag,
      activeIconPath: redFlagClicked,
      container: "configs"
    },
    {
      name: "Ajuda",
      iconPath: help,
      activeIconPath: helpClicked,
      container: "configs"
    },
    {
      name: "Enviar feedback",
      iconPath: feedback,
      activeIconPath: feedback,
      container: "configs"
    },
  ];
  
const menuContainers = [
  {
    name: 'inicial'
  },
  {
    name: 'you',
    title: 'Você >'
  },
  {
    name: 'subscriptions',
    title: 'Inscrições'
  },
  {
    name: 'explore',
    title: 'Explorar'
  },
  {
    name: 'more',
    title: 'Mais do YouTube'
  },
  {
    name: 'configs'
  }]

function Menu() {
  const { openMenu, selectedMenuItem, setSelectedMenuItem } = useContext(MenuContexts)
  const navigate = useNavigate()

  useEffect(() => {
    itens.map((item) => {
      if(location.pathname === item.link) {
        setSelectedMenuItem(item.name)
      }
    })
    
    if(location.pathname === '/search' || location.pathname === '/yourVideos') {
      setSelectedMenuItem('')
    }
  }, [location.pathname])

  return (
    <>
      <Container openMenu={openMenu}>
        {menuContainers.map((container) => {
          const filterItens = itens.filter((item) => item.container === container.name)

          return (
            <MenuContainer openMenu={openMenu}>
              <TitleContainer containerTitle={container.title} openMenu={openMenu}>
                <h4>{container.title}</h4>
              </TitleContainer>
              {filterItens.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => { setSelectedMenuItem(item.name); if(item.link){ navigate(item.link) } }} selectedMenuItem = {selectedMenuItem === item.name}>
                  <ButtonIcon src={selectedMenuItem === item.name? item.activeIconPath : item.iconPath}></ButtonIcon>
                  <span>{item.name}</span>
                </MenuItem>
              ))}
            </MenuContainer>
          )
        })}
      </Container>
    </>
  )
}

export default Menu