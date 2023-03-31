import { useNavigate } from "react-router-dom";
import { ChevronLeft, Inbox, Mail } from "@mui/icons-material";
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { AppMenu } from "../../navigation/app.menu";
import { Drawer, DrawerHeader } from "./styles";
import { AppRoutes } from "../../routes/app.routes";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>  
}


export function SideList({open, setOpen}: Props) {

  const theme = useTheme();

  const navigate = useNavigate();
  
  const listMenu = useMemo(AppMenu, [])

  return (
    <>
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listMenu.map(({icon, path, title}) => (
            <ListItem key={title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => navigate(path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />        
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />      
      
      <AppRoutes />
      
    </Box>
    </>
  )
}