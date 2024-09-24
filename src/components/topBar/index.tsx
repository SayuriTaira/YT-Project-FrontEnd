import { useContext, useState } from "react"
import { Category, Container } from "./styles"
import { MenuContexts } from "../../contexts/menuContexts"

function TopBar() {
const categoryItens = [
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
]

    const { openMenu } = useContext(MenuContexts)
    const [selectedCategory, setSelectedCategory] = useState('Tudo')

    return (
        <Container openMenu = {openMenu}>
            {categoryItens.map((item) => {
                return (
                    <Category onClick={() => setSelectedCategory(item.name)} selectedCategory={item.name === selectedCategory}>{item.name}</Category>
                )
            })}
        </Container>
    )
}

export default TopBar