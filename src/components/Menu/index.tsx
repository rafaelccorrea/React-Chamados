import { useState } from 'react'

import {
  KeyboardArrowDownIcon,
  Logout,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip
} from '../../MaterialUI'
import { AuthContext } from '../../context/auth'
import { useContext } from 'react';

export default function AccountMenu () {
  const { logout }: any= useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  
  return (
    <>
      <Box sx={ {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
      } }>
        <Tooltip title="Configurações de conta">
          <IconButton
            onClick={ handleClick }
            size="small"
            sx={ { ml: 2 } }
            aria-controls={ open ? 'account-menu' : undefined }
            aria-haspopup="true"
            aria-expanded={ open ? 'true' : undefined }
          >
          <KeyboardArrowDownIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={ anchorEl }
        id="account-menu"
        open={ open }
        onClose={ handleClose }
        onClick={ handleClose }
        PaperProps={ {
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        } }
        transformOrigin={ {
          horizontal: 'right',
          vertical: 'top'
        } }
        anchorOrigin={ {
          horizontal: 'right',
          vertical: 'bottom'
        } }
      >
        <MenuItem onClick={ logout }>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
