import { createContext, ReactNode, useState } from "react";

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

export const MenuContexts = createContext<IProps>({
    openMenu: true,
    setOpenMenu: () => {}
})

export const MenuStore = ({children}: {children: ReactNode}) => {
    const [openMenu, setOpenMenu] = useState(true)

    return (
        <MenuContexts.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </MenuContexts.Provider>
    )
}