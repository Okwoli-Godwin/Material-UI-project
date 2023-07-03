import { Box, styled, Card, Typography, Button } from "@mui/material"
import img from "../assets/legshoe.png"
import DoneAllIcon from '@mui/icons-material/DoneAll';


const Collections = () => {
  return (
    <BoxContainer>
      <BoxWrapper>
        <RightCard>
          <img src={img} style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }} />
        </RightCard>

        <LeftCard elevation={0}>
          <Gethold>
            <div style={{ height: "3px", width: "80px", backgroundColor: "#6E6E6E", borderRadius: "10px" }}></div>
            <Typography variant="h6" color="#CE2A2A" sx={{fontSize: "16px", ml: "10px"}}>Upgrade Your Style</Typography>
          </Gethold>

          <BigText variant="h3">New Day New Way & New Style</BigText>
          <Paragraph variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Paragraph>

          <Optionhold>
            <Holder>
              <DoneAllIcon fontSize="large" sx={{ color: "#CE2A2A" }} />
              <Smalltext variant="body1">Original Brand</Smalltext>
            </Holder>
            <Holder>
              <DoneAllIcon fontSize="large" sx={{ color: "#CE2A2A" }} />
              <Smalltext variant="body1">Original Brand</Smalltext>
            </Holder>
            <Holder>
              <DoneAllIcon fontSize="large" sx={{ color: "#CE2A2A" }} />
              <Smalltext variant="body1">Original Brand</Smalltext>
            </Holder>
          </Optionhold>

          <ButtonCollext>View Collection</ButtonCollext>
        </LeftCard>
      </BoxWrapper>
    </BoxContainer>
  )
}

export default Collections
const ButtonCollext = styled(Button)({
  width: "150px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: '#000',
  color: "#fff",
  marginTop: "25px",
  "&:hover": {
    border: "1px solid #000",
    color: "#000"
  }
})

const Smalltext = styled(Typography)({
  display: "flex",
  marginLeft: "10px",
  color: "#54595F",
})

const Holder = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px"
})

const Optionhold = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "55px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "30px",
  },
}))

const Paragraph = styled(Typography)({
  color: "#54595F",
  marginTop: "20px"
})

const BigText = styled(Typography)(({theme}) => ({
  fontSize: "60px",
  marginTop: "17px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px"
  },
}))

const Gethold = styled(Box)({
  display: "flex",
  alignItems: "center"
})

const LeftCard = styled(Card)(({theme}) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "15px",
  [theme.breakpoints.down("md")]: {
    width: "100%"
  },
}))

const RightCard = styled(Card)(({theme}) => ({
  width: "45%",
  height: "550px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "300px"
  },
}))

const BoxWrapper = styled(Box)(({theme}) => ({
  display: "flex",
  width: "95%",
  justifyContent: "space-between",
  paddingTop: "50px",
  paddingBottom: "50px",
  flexWrap: 'wrap',
  [theme.breakpoints.down("sm")]: {
    paddingTop: "20px"
  },
}))

const BoxContainer = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})