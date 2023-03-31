import { useMemo, useState } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material';
import { grey, teal } from 'material-ui-colors'

import { SideList } from '../../components/SideList';
import { TopBar } from '../../components/TopBar';

import { AppBar } from './styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export function Dashboard() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      primary: dark ? {
        main: grey[900],        
      } : {
        main: grey[50],        
      },
      secondary: dark ? {        
          main: teal[200],          
        } : {
          main: teal[500],          
        },      
    }
  }), [dark]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  console.log(dark)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <TopBar 
            {...{
              handleDrawerOpen,              
              open,
              setDark,
              dark
            }}
          />      
        </AppBar>
        <SideList 
          {...{
            open,
            setOpen
          }}
        />      
      </Box>
    </ThemeProvider>
  );
}
