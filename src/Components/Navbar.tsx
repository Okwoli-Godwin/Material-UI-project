import { AppBar, Dialog, Toolbar, Typography, styled } from "@mui/material"
import { Box, Button } from "@mui/material"
import logo from "../assets/whiten.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import React from "react"
import { sectionId } from "../Components/Sectionid"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Close } from "@mui/icons-material";

const navigationItems = [
  {
    text: "Home",
    to: sectionId.hero
    },
    {
    text: "About Us",
    to: sectionId.contacts
    },
    {
    text: "Products",
    to: sectionId.intro
  },
    {
    text: "Contact Us",
    to: sectionId.intro
  },
  
]



const Navbar = () => {

  const mappedItems = (
    navigationItems.map(({ to, text }) => {
      return (
        <AnchorLink key={to}>
          <Button color="inherit" sx={{m: 2}}>
            {text}
          </Button>
        </AnchorLink>
      )
    })
  )

  const [open, setOpen] = React.useState(false)
  
  const onOpenHandler = () => setOpen(true)
  const onCloseHandler = () => setOpen(false)

  return (
    <AppBar position="sticky" sx={{backgroundColor: "#000", height: 70}}>
      <StyledToolbar>
        <Box
        component="img"
        sx={{ height: {xs: "40px", md: "45px"} }}
        alt="Logo"
        src={logo}
        />

           <Box sx={{display: {xs: "none", md: "flex"}}}>
          {mappedItems}
      </Box>


        <Box sx={{display: "flex"}} gap={2}>
          <Box sx={{display: {xs: "none", md: "flex"}}}>
            <h4>$0.00</h4>
            </Box>
          <IconButton aria-label="cart" color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>

          <Box sx={{display: {xs: "flex", md: "none"}}}>
            <IconButton
              color="inherit"
              onClick={onOpenHandler}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </StyledToolbar>
      <Dialog
        open={open}
        fullWidth
        fullScreen
      >
        <AppBar position="static" sx={{ background: "white", color: "text.primary" }}>
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <IconButton color="inherit" onClick={onCloseHandler}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box display="flex" flexDirection="column" py={3} px={2}>
          {mappedItems}
        </Box>
      </Dialog>
    </AppBar>
  )
}

export default Navbar

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "70px"
})