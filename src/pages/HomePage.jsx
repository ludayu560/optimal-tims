import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Paper } from '@mui/material';
import { Time } from '../data/time';
import Verdict from '../data/verdict'
import { Grid } from '@mui/material';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    '@media all': {
      minHeight: 60,
    },
  }));

function HomePage() {
    
    return (
    <div>
        {/* // Main Text */}
        <Box backgroundColor='#BA484E' minHeight='100vh'>

            {/* // Navbar */}
            <Box>
                <AppBar position="static" 
                    sx={{
                        backgroundColor: '#BA484E',
                        borderBottom: '3px solid white'}}
                    >
                    <StyledToolbar>

                    {/* // Menu Button */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ position: 'absolute', right: 16}}>

                        <MenuIcon />
                    </IconButton>

                    {/* // Time  */}
                    <Typography variant='h5' fontWeight={700} sx={{ flexGrow: 1, alignSelf: 'center', textAlign: 'center'}}>
                        <Time/>
                    </Typography>
                    </StyledToolbar>
                </AppBar>
            </Box>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '80vh' }}
            >
                <Typography item variant='h2' fontWeight={700} align='center' color={'#ffffff'}>

                    It is a <br />
                    <Typography variant='h1' fontWeight={'inherit'}>
                        <Verdict/>
                    </Typography>
                    time to go to Tims
                </Typography>
            </Grid> 
        </Box>
        {/* // Menu */}

    </div>
    )
}

export default HomePage;