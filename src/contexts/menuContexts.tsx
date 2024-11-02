import { createContext, ReactNode, useState } from "react";

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
    selectedMenuItem: string,
    setSelectedMenuItem: (selectedMenuItem: string) => void
}

export const MenuContexts = createContext<IProps>({
    openMenu: true,
    setOpenMenu: () => {},
    selectedMenuItem: 'Início',
    setSelectedMenuItem: () => {}
})

export const MenuStore = ({children}: {children: ReactNode}) => {
    const [openMenu, setOpenMenu] = useState(true)
    const [selectedMenuItem, setSelectedMenuItem] = useState('Início')

    return (
        <MenuContexts.Provider value={{openMenu, setOpenMenu, selectedMenuItem, setSelectedMenuItem}}>
            {children}
        </MenuContexts.Provider>
    )
}