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
} from '../../materialUI'

import { Container } from './styles'
export default function AccountMenu () {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
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
        <Tooltip title={ 'Configurações de conta' }>
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
          sx: {Container}
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
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
