import { Box, styled, Typography } from "@mui/material"
import logo from "../assets/whiten.png"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
      <BoxContainer>
          <BoxWrapper>
              <FirstRoll>
                  <img src={logo} alt="" style={{width: "150px"}} />
              </FirstRoll>

              <SecondRoll>
                  <Typography variant="h3" sx={{ color: "#fff", fontSize: "18px" }}>ABOUT NIKE</Typography>
                  <Typography variant="body1" sx={{ color: "#6b6f74", fontSize: "14px", marginTop: "10px" }}>About us</Typography>
                  <Typography variant="body1" sx={{color: "#6b6f74", fontSize: "14px", marginTop:"7px"}}>Nike careers</Typography>
                  <Typography variant="body1" sx={{color: "#6b6f74", fontSize: "14px", marginTop:"7px"}}>Nike Express</Typography>
                  <Typography variant="body1" sx={{color: "#6b6f74", fontSize: "14px", marginTop:"7px"}}>Terms and Conditions</Typography>
                  <Typography variant="body1" sx={{color: "#6b6f74", fontSize: "14px", marginTop:"7px"}}>Privacy Notice</Typography>
              </SecondRoll>

              <ThirdRoll>
                  <Typography variant="h3" sx={{ color: "#fff", fontSize: "18px" }}>Quick Links</Typography>
                  <Typography variant="body1" sx={{ color: "#6b6f74", fontSize: "14px", marginTop: "10px", alignItems: 'center', display: "flex" }}><FacebookRoundedIcon sx={{color: "blue", marginRight: "10px"}} />Facebook</Typography>
                  <Typography variant="body1" sx={{color: "#6b6f74", fontSize: "14px", marginTop:"7px", alignItems: 'center', display: "flex"}}><TwitterIcon sx={{color: "skyblue", marginRight: "10px"}} />Twitter</Typography>
                  <Typography variant="body1" sx={{color: "#6b6f74", fontSize: "14px", marginTop:"7px", alignItems: 'center', display: "flex"}}><InstagramIcon sx={{color: "red", marginRight: "10px"}} />Instagram</Typography>
              </ThirdRoll>

              <FourthRoll>
                  <Typography variant="h3" sx={{ color: "#fff", fontSize: "18px" }}>Contact Us</Typography>
                  <Typography variant="body1" sx={{ color: "#6b6f74", fontSize: "14px", marginTop: "10px" }}>Okwoli Godwin</Typography>
                  <Typography variant="body1" sx={{color: "#6b6f74", fontSize: "14px", marginTop:"7px"}}>Olodi Apapa, Lagos, Nigeria</Typography>
                  <Typography variant="body1" sx={{color: "#6b6f74", fontSize: "14px", marginTop:"7px"}}>Okwolig60@gmail.com</Typography>
              </FourthRoll>
          </BoxWrapper>
    </BoxContainer>
  )
}

export default Footer
const FourthRoll = styled(Box)(({theme}) =>({
    width: "25%",
    display: "flex",
    flexDirection: 'column',
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}))

const ThirdRoll = styled(Box)(({theme}) =>({
    width: "25%",
    display: "flex",
    flexDirection: 'column',
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginBottom: "20px"
    },
}))

const SecondRoll = styled(Box)(({theme}) =>({
    width: "25%",
    display: "flex",
    flexDirection: 'column',
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginBottom: "20px"
    },
}))

const FirstRoll = styled(Box)(({theme}) => ({
    width: "25%",
    display: "flex",
    flexDirection: 'column',
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginBottom: "20px"
    },
}))

const BoxWrapper = styled(Box)({
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "50px",
     paddingBottom: "50px"
})

const BoxContainer = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
})