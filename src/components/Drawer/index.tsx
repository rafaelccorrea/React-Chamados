import {useState, ReactNode} from 'react'
import { Link as RouterLink } from 'react-router-dom'

import {
  useTheme,
} from '@mui/material/styles'

import {
  Link,
  MenuIcon,
  IconButton,
  Box,
  DashboardCustomizeIcon,
  PlaylistAddIcon,
  ChevronRightIcon,
  ListIcon,
  ListItemButton,
  ChevronLeftIcon,
  PersonAddIcon,
  GroupIcon,
  List,
  ListItemIcon,
  ListItemText,
} from '../../MaterialUI'

import {
  LinkStyles,
  TextLink,
  IconStyle,
  DrawerHeader,
  Drawer
} from './styles'

export function SideMenu ({ children }: {children: ReactNode}) {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={ {
      display: 'flex',
      zIndex: 100
    } }>
      {open && (
        <div
          style={ {
            background: 'rgba(0, 0, 0, 0.5',
            position: 'fixed',
            backdropFilter: 'blur(2px)',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          } }
          onClick={ () => setOpen(false) }
        />
      )}
      <Drawer
        PaperProps={ {
          sx: {
            background: '#F28705',
            color: '#ffffff'
          }
        } }
        variant="permanent"
        sx={ { position: 'fixed' } }
        open={ open }
        hideBackdrop={ true }
      >
        <DrawerHeader sx={ { paddingRight: '14px' } }>
          {!open
            ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={ handleDrawerOpen }
              edge="start"
              sx={ { ...(open ? { display: 'none' } : {}) } }
            >
              <MenuIcon />
            </IconButton>
              )
            : (
            <IconButton onClick={ handleDrawerClose }>
              {theme.direction === 'rtl'
                ? (
                <ChevronRightIcon />
                  )
                : (
                <ChevronLeftIcon style={ IconStyle }/>
                  )}
            </IconButton>
              )}
        </DrawerHeader>
        <List>
        <ListItemButton>
          <ListItemIcon>
            <Link style={ LinkStyles } component={ RouterLink } to="/home" onClick={ handleDrawerClose }>
              <DashboardCustomizeIcon style={ IconStyle } color="action" />
              <ListItemText style={ TextLink } primary="Dashboard" />
            </Link>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <Link style={ LinkStyles } component={ RouterLink } onClick={ handleDrawerClose } to="/clients">
            <GroupIcon style={ IconStyle } color="action" />
          <ListItemText style={ TextLink } primary="Clientes" />
          </Link>
          </ListItemIcon>
        </ListItemButton>
        </List>
      </Drawer>
      {children}
    </Box>
  )
}

export default function DrawerMenu () {
  return (
    <SideMenu>
      <Box component="main" sx={ {
        flexGrow: 1,
        ml: '60px'
      } }>
      </Box>
    </SideMenu>
  )
}
