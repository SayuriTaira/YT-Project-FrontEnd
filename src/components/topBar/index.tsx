import { useContext, useState } from "react"
import { Category, Container } from "./styles"
import { MenuContexts } from "../../contexts/menuContexts"

function TopBar() {
    const isHomePage = location.pathname === '/'
    const categoryItens = isHomePage?
    [
        {name: 'Tudo'},
        {name: 'Jogos'},
        {name: 'Música'},
        {name: 'Ao Vivo'},
        {name: 'Música Brasileira'},
        {name: 'Notícias'},
        {name: 'Restaurantes'},
        {name: 'Suspenses'},
        {name: 'Jogo de ação e aventura'},
        {name: 'Arquitetura'},
        {name: 'Aulas'},
        {name: 'Filmes de comédia'},
        {name: 'Enviados Recentemente'},
    ] :
    [
        {name: 'Todos'},
        {name: 'Shorts'},
        {name: 'Vídeos'},
        {name: 'Não assistidos'},
        {name: 'Assistidos'},
        {name: 'Enviados recentemente'},
        {name: 'Ao vivo'},
        {name: 'Playlists'},
    ]

    const inicialCategory = isHomePage? 'Tudo' : 'Todos'
    const { openMenu } = useContext(MenuContexts)
    const [selectedCategory, setSelectedCategory] = useState(inicialCategory)

    return (
        <Container openMenu={openMenu} isHomePage={isHomePage}>
            {categoryItens.map((item) => {
                return (
                    <Category onClick={() => setSelectedCategory(item.name)} selectedCategory={item.name === selectedCategory}>{item.name}</Category>
                )
            })}
        </Container>
    )
}

export default TopBar