import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextType {
  isSidebarOpen:boolean
  pageId: string | null
  openSidebar: ()=>void
  closeSidebar: ()=>void
  setPageId: React.Dispatch<React.SetStateAction<string | null>>;
}

const AppContext = createContext<AppContextType>({} as AppContextType);



export const AppProvider = ({children}:{children:ReactNode})=>{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState<string|null>(null)
  
  const openSidebar = () =>{
    setIsSidebarOpen(true)
  }

  const closeSidebar = () =>{
    setIsSidebarOpen(false)
  }

  return <AppContext.Provider value={{
    isSidebarOpen, pageId, setPageId, openSidebar,closeSidebar
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}