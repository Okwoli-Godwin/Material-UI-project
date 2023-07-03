import { Box, styled, Card, Typography, Button, IconButton } from "@mui/material"
import img2 from "../assets/nike2.png"
import img from "../assets/nike5.png"
import img3 from "../assets/nike9.png"
import img4 from "../assets/nike11.png"
import { Favorite } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Product = () => {

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
      <BoxContainer>
          <BoxWrapper>
              <Top variant="h2">All Products</Top>
              <Wrap>
                  <Holder>
                      <Hold>
            <SaleBox>Sale!</SaleBox>
            <Hovercard>
                <IconButton onClick={handleClick2} sx={{position: "absolute", right: "20px", bottom: "10px"}}>
                {iconColor2 === 'white' ? <FavoriteIcon style={{ color: '#fff', fontSize: "35px" }}/> : <Favorite style={{ color: 'red', fontSize: "35px"}} />}
                </IconButton>
            </Hovercard>
            <img src={img2} alt="Nike Air Force 1" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }} />
                      </Hold>
                      
                      <Sections>
                          <Typography variant="body1">Nike Latest Shoe</Typography>
                          <Typography variant="body1" sx={{ fontWeight: "700" }}>₦12,050</Typography>
                          
                          <Cartbutton>
                              <ShoppingCartIcon />
                              <p style={{marginLeft: "7px"}}>Add to Cart</p>
                          </Cartbutton>
                      </Sections>
                  </Holder>

                   <Holder>
                      <Hold>
            <SaleBox>Sale!</SaleBox>
            <Hovercard>
                <IconButton onClick={handleClick2} sx={{position: "absolute", right: "20px", bottom: "10px"}}>
                {iconColor2 === 'white' ? <FavoriteIcon style={{ color: '#fff', fontSize: "35px" }}/> : <Favorite style={{ color: 'red', fontSize: "35px"}} />}
                </IconButton>
            </Hovercard>
            <img src={img3} alt="Nike Air Force 1" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }} />
                      </Hold>
                      
                      <Sections>
                          <Typography variant="body1">Nike Latest Shoe</Typography>
                          <Typography variant="body1" sx={{ fontWeight: "700" }}>₦15,050</Typography>
                          
                          <Cartbutton>
                              <ShoppingCartIcon />
                              <p style={{marginLeft: "7px"}}>Add to Cart</p>
                          </Cartbutton>
                      </Sections>
                  </Holder>

                   <Holder>
                      <Hold>
            <SaleBox>Sale!</SaleBox>
            <Hovercard>
                <IconButton onClick={handleClick2} sx={{position: "absolute", right: "20px", bottom: "10px"}}>
                {iconColor2 === 'white' ? <FavoriteIcon style={{ color: '#fff', fontSize: "35px" }}/> : <Favorite style={{ color: 'red', fontSize: "35px"}} />}
                </IconButton>
            </Hovercard>
            <img src={img} alt="Nike Air Force 1" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }} />
                      </Hold>
                      
                      <Sections>
                          <Typography variant="body1">Nike Latest Shoe</Typography>
                          <Typography variant="body1" sx={{ fontWeight: "700" }}>₦9,050</Typography>
                          
                          <Cartbutton>
                              <ShoppingCartIcon />
                              <p style={{marginLeft: "7px"}}>Add to Cart</p>
                          </Cartbutton>
                      </Sections>
                  </Holder>

                   <Holder>
                      <Hold>
            <SaleBox>Sale!</SaleBox>
            <Hovercard>
                <IconButton onClick={handleClick2} sx={{position: "absolute", right: "20px", bottom: "10px"}}>
                {iconColor2 === 'white' ? <FavoriteIcon style={{ color: '#fff', fontSize: "35px" }}/> : <Favorite style={{ color: 'red', fontSize: "35px"}} />}
                </IconButton>
            </Hovercard>
            <img src={img4} alt="Nike Air Force 1" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }} />
                      </Hold>
                      
                      <Sections>
                          <Typography variant="body1">Nike Latest Shoe</Typography>
                          <Typography variant="body1" sx={{ fontWeight: "700" }}>₦10,000</Typography>
                          
                          <Cartbutton>
                              <ShoppingCartIcon />
                              <p style={{marginLeft: "7px"}}>Add to Cart</p>
                          </Cartbutton>
                      </Sections>
                  </Holder>
              </Wrap>
          </BoxWrapper>
    </BoxContainer>
  )
}

export default Product
const Cartbutton = styled(Button)({
    width: "90%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#CE2A2A",
    marginTop: "15px",
    "&:hover": {
        color: "#fff",
    backgroundColor: "#CE2A2A",
    }
})

const Sections = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginTop: "13px",
    alignItems: "center"
})

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
  width: "100%",
  height: "300px",
  position: 'relative',
}))

const Holder = styled(Card)(({theme}) =>({
    width: "300px",
    display: "flex",
    flexDirection: "column",
    overflow: 'hidden',
    paddingBottom: "12px",
    marginTop: "40px",
    [theme.breakpoints.down("md")]: {
    width: "350px"
    },
    [theme.breakpoints.down("sm")]: {
    width: "400px"
  }
}))

const Wrap = styled(Box)({
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: 'space-between'
})

const Top = styled(Typography)({
    fontSize: "34px",
  fontWeight: "500",
})

const BoxWrapper = styled(Box)(({theme}) =>({
    width: "95%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "50px",
    paddingBottom: "50px",
    [theme.breakpoints.down("sm")]: {
    paddingTop: "20px",
  }
}))

const BoxContainer = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})