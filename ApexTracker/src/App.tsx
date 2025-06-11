import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

import Dashboard from "./scenes/dashboard/Dashboard"
import Topbar from "./scenes/global/Topbar"
import { Routes, Route } from "react-router-dom";
import SidebarMenu from "./scenes/global/SidebarMenu";

function App() {
  const [theme, colorMode] = useMode();
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app" >
        <SidebarMenu/>
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App
