import Collections from "./Components/Collections"
import Feed from "./Components/Feed"
import Hero from "./Components/Hero"
import { Box } from "@mui/material"
import Navbar from "./Components/Navbar"
import { sectionId } from "./Components"
import theme from "./Components/theme"
import { ThemeProvider } from "@mui/system"
import Product from "./Components/Product"
import Footer from "./Components/Footer"

const sections = [
  {
    sectionid: sectionId.hero,
    component: < Hero/>
  },
  {
    sectionid: sectionId.contacts,
    component: < Feed/>
  },
  {
    sectionid: sectionId.projects,
    component: < Collections/>
  },
  {
    sectionid: sectionId.projects,
    component: < Product/>
  },
  {
    sectionid: sectionId.projects,
    component: < Footer/>
  },
]

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <Navbar />
      {sections.map(({ component }) => {
        return component
      })}
    </Box>
    </ThemeProvider>
  )
}

export default App