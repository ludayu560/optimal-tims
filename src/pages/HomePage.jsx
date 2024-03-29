import Typography from '@mui/material/Typography';
import { Container, Paper } from '@mui/material';
import Verdict from '../data/verdict'
import Header from './Header';


function HomePage() {
    
    return (
    <body style={{backgroundColor: "#f9f5ee", height: "100vh"}}>
        <Header></Header>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}>
            <Typography fontSize={'3rem'} fontWeight={700} textAlign={'center'} color={'#3f2021'}> It is a</Typography>
            <Typography fontSize={'4rem'} fontWeight={800} textAlign={'center'}>  <Verdict/> </Typography>
            <Typography fontSize={'3rem'} fontWeight={700} textAlign={'center'} color={'#3f2021'}>  time to go to Tims</Typography>
        </Container>


    </body>
    )
}

export default HomePage;