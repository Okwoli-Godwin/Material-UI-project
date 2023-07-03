import { Box, styled, Typography, Button } from "@mui/material"
import img from "../assets/best.jpg"
import img2 from "../assets/unsplash1.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div style={{overflow: "hidden"}}>
      <Slider {...settings}>
        <BannerContainer>
      <BannerBackdrop>
        <BannerContent>
          
          <Gethold>
            <div style={{ height: "3px", width: "60px", backgroundColor: "#fff", borderRadius: "10px" }}></div>
            <Typography variant="h6" color="#CE2A2A" sx={{fontSize: "16px", ml: "10px"}}>Get Big Sale Today</Typography>
          </Gethold>

          <BannerTitle variant="h1">Get Favourite Shoes & Enjoy Your Journey</BannerTitle>
          <Calltoaction variant="outlined" >Shop Now</Calltoaction>

        </BannerContent>
      </BannerBackdrop>
        </BannerContainer>
        
        <BannerContainer2>
      <BannerBackdrop>
        <BannerContent>
          
          <Gethold>
            <div style={{ height: "3px", width: "60px", backgroundColor: "#fff", borderRadius: "10px" }}></div>
            <Typography variant="h6" color="#CE2A2A" sx={{fontSize: "16px", ml: "10px"}}>Get Big Sale Today</Typography>
          </Gethold>

          <BannerTitle variant="h1">Get Favourite Shoes & Enjoy Your Journey</BannerTitle>
          <Calltoaction variant="outlined" >Shop Now</Calltoaction>

        </BannerContent>
      </BannerBackdrop>
    </BannerContainer2>

        <BannerContainer3>
      <BannerBackdrop>
        <BannerContent>
          
          <Gethold>
            <div style={{ height: "3px", width: "60px", backgroundColor: "#fff", borderRadius: "10px" }}></div>
            <Typography variant="h6" color="#CE2A2A" sx={{fontSize: "16px", ml: "10px"}}>Get Big Sale Today</Typography>
          </Gethold>

          <BannerTitle variant="h1">Get Favourite Shoes & Enjoy Your Journey</BannerTitle>
          <Calltoaction variant="outlined" >Shop Now</Calltoaction>

        </BannerContent>
      </BannerBackdrop>
    </BannerContainer3>
      </Slider>
    </div>
  )
}

export default Hero
const Calltoaction = styled(Button)({
  width: "150px",
  marginTop: "40px",
  height: "50px",
  border: "1px solid #CE2A2A",
 color: "#fff",
})

const BannerTitle = styled(Typography)(({theme}) => ({
  fontSize: "65px",
  fontWeight: "800",
  color: "#fff",
  marginTop: "15px",
  lineHeight: "1.3em",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    textAlign: "center"
  }
}))

const Gethold = styled(Box)({
  display: "flex",
  alignItems: "center"
})

const BannerContent = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  width: "58%",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: "60px"
  }
}))

const BannerBackdrop = styled(Box)(({theme}) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  backgroundColor: "rgba(0,0,0,0.6)",
  paddingBottom: "180px",
  paddingTop: "180px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingBottom: "100px",
    paddingTop: "70px"
  }
}))

const BannerContainer = styled(Box)({
  display: "flex",
  height: "100%",
  width: "100%",
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  overflow: "hidden",
})

const BannerContainer2 = styled(Box)({
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${img2})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  overflow: "hidden"
})

const BannerContainer3 = styled(Box)({
  display: "flex",
  height: "100%",
  width: "100%",
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  overflow: "hidden"
})