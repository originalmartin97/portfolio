import * as React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { keyframes } from '@mui/system';

// Create animations for theme toggle
const rotateIn = keyframes`
  from {
    transform: rotate(-180deg);
    opacity: 0;
  }
  to {
    transform: rotate(0);
    opacity: 1;
  }
`;

function Header({ mode, toggleColorMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  
  const menuItems = ['About', 'Projects', 'Skills', 'Experiences', 'Contact'];
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Simple scroll function - no visibility toggles
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false); // Close drawer if open
    }
  };
  
  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text) => (
          <ListItem button key={text} onClick={() => scrollToSection(text.toLowerCase())}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Takács Martin
        </Typography>
        
        {/* Theme toggle button with animation */}
        <Tooltip title={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"}>
          <IconButton 
            color="inherit" 
            onClick={toggleColorMode} 
            sx={{ 
              mr: 2,
              animation: `${rotateIn} 0.5s ease-out`,
              "& .MuiSvgIcon-root": {
                transition: 'transform 0.5s ease',
                transform: 'rotate(0deg)'
              },
              "&:hover .MuiSvgIcon-root": {
                transform: 'rotate(30deg)'
              }
            }}
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box>
            {menuItems.map((item) => (
              <Button 
                color="inherit" 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;