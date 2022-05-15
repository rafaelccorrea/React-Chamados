import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  MenuIcon,
  MailIcon,
  ListItemIcon,
  Toolbar,
  Box,
  CssBaseline,
  Link,
  Logout,
  Typography
} from "../../materialUI";

import { DrawerHeader, Drawer, AppBar, LinkStyles, TextLink } from "./styles";

import DrawerProps from './interface'

export default function MiniDrawer(props: DrawerProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ display: "flex" }}>
        <Toolbar
          sx={{ backgroundColor: "#FFF", justifyContent: "space-between" }}
        >
          <IconButton
            color="info"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="primary">
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ color: "white" }}>
          <ListItemButton>
            <ListItemIcon>
              <Link style={LinkStyles} component={RouterLink} to="/home">
                <MailIcon sx={{ color: 'white' }} />
                <ListItemText style={TextLink} primary="Dashboard" />
              </Link>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Link style={LinkStyles} component={RouterLink} to="/home">
                <MailIcon sx={{ color: 'white' }} />
                <ListItemText style={TextLink} primary="Dashboard" />
              </Link>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Link style={LinkStyles} component={RouterLink} to="/home">
                <MailIcon sx={{ color: 'white' }} />
                <ListItemText style={TextLink} primary="Dashboard" />
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Link style={LinkStyles} component={RouterLink} to="/home">
                <Logout sx={{ color: 'white' }} />
                <ListItemText style={TextLink} primary="Logout" />
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main">
        {props.children}
      </Box>
    </Box>
  );
}
