import { Box, styled, Card, IconButton, Button, Typography } from "@mui/material"
import img from "../assets/nike4.png"
import img2 from "../assets/nike2.png"
import img3 from "../assets/shoehero.png"
import { Favorite } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react"

const Feed = () => {

  const [iconColor, setIconColor] = React.useState("white")
  const [iconColor2, setIconColor2] = React.useState("white")
  const [iconColor3, setIconColor3] = React.useState("white")

  const handleClick = () => {
    const newColor = iconColor === 'white' ? 'red' : 'white';
    setIconColor(newColor);
  }

  const handleClick2 = () => {
    const newColor = iconColor2 === 'white' ? 'red' : 'white';
    setIconColor2(newColor);
  }

  const handleClick3 = () => {
    const newColor = iconColor3 === 'white' ? 'red' : 'white';
    setIconColor3(newColor);
  }


  return (
    <Boxcontainer>
      <BoxWrapper>
        <CardHolder>
          <Hold>
            <SaleBox>Sale!</SaleBox>
            <Hovercard>
                <IconButton onClick={handleClick} sx={{position: "absolute", right: "20px", bottom: "10px"}}>
                {iconColor === 'white' ? <FavoriteIcon style={{ color: '#fff', fontSize: "35px" }}/> : <Favorite style={{ color: 'red', fontSize: "35px"}} />}
                </IconButton>
                
                <Buttonhold>Shop Now</Buttonhold>
            </Hovercard>
            
            <img src={img} alt="Nike Air Force 1" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }} />
            
          </Hold>

          <Hold>
            <SaleBox>Sale!</SaleBox>
            <Hovercard>
                <IconButton onClick={handleClick2} sx={{position: "absolute", right: "20px", bottom: "10px"}}>
                {iconColor2 === 'white' ? <FavoriteIcon style={{ color: '#fff', fontSize: "35px" }}/> : <Favorite style={{ color: 'red', fontSize: "35px"}} />}
                </IconButton>
                
                <Buttonhold>Shop Now</Buttonhold>
            </Hovercard>
            <img src={img2} alt="Nike Air Force 1" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }} />
          </Hold>

          <Hold>
            <SaleBox>Sale!</SaleBox>
            <Hovercard>
                <IconButton onClick={handleClick3} sx={{position: "absolute", right: "20px", bottom: "10px"}}>
                {iconColor3 === 'white' ? <FavoriteIcon style={{ color: '#fff', fontSize: "35px" }}/> : <Favorite style={{ color: 'red', fontSize: "35px"}} />}
                </IconButton>
                
                <Buttonhold>Shop Now</Buttonhold>
            </Hovercard>
            <img src={img3} alt="Nike Air Force 1" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }} />
          </Hold>
        </CardHolder>

        <Bigtext variant="h2">Newly Released Products Available</Bigtext>
        <Calltoaction variant="outlined" >Shop Now</Calltoaction>
      </BoxWrapper>
    </Boxcontainer>
  )
}

export default Feed
const Calltoaction = styled(Button)({
  width: "150px",
  marginTop: "40px",
  height: "50px",
  border: "1px solid #CE2A2A",
 color: "#000",
})

const Bigtext = styled(Typography)(({theme}) => ({
  fontSize: "34px",
  fontWeight: "500",
  marginTop: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    textAlign: "center",
    marginTop: "25px",
  }
}))

const Buttonhold = styled(Button)({
  width: "130px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#CE2A2A",
  borderRadius: "50px",
  position: "absolute",
  bottom: "10px",
  left: "10px"
})

// const Holder = styled(Box)({
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   position: "absolute",
//   opacity: "0",
//   "&:hover": {
//     opacity: "1"
//   }
// })

// const Iconcard = styled(Box)({
//   position: "absolute",
//   width: "100%",
//   height: "100%",
//   backgroundColor: "red",
// })

const Hovercard = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.3)",
  position: "absolute",
  transition: "all 350ms ease-in-out",
})

const SaleBox = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FF8800",
  fontWeight: "600",
  color: "#fff",
  fontSize: "13px",
  right: "20px",
  top: "13px",
  zIndex: "10"
})

const Hold = styled(Card)(({theme}) => ({
  width: "400px",
  height: "300px",
  position: 'relative',
  [theme.breakpoints.down("md")]: {
    width: "350px",
    marginBottom: "20px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "400px",
  }
}))

const CardHolder = styled(Box)(({theme}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center"
  }
}))

const BoxWrapper = styled(Box)(({theme}) => ({
  width: "95%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "50px",
  paddingBottom: "50px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "30px"
  }
}))

const Boxcontainer = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
})