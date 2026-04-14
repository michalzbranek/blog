import { AppBar, IconButton, Typography, Box, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from "react";
import { ColorModeContext } from "./main";

// @ts-ignore: Object is possibly 'null'.
function BlogBar({ drawerWidth, handleDrawerToggle }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        height: { xs: 70, sm: 80 },
        elevation: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4 },
        backgroundColor: "background.paper",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            display: { sm: "none" },
            mr: 2,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.2rem", sm: "2rem" },
              fontFamily: '"Russo One", sans-serif',
              color: "text.primary",
            }}
          >
            MICHAL ZBRANEK
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: "text.secondary",
              fontSize: { xs: "0.8rem", sm: "1.1rem" },
              fontFamily: '"Russo One", sans-serif',
              letterSpacing: 2,
              display: { xs: "none", sm: "block" }
            }}
          >
            BLOG
          </Typography>
        </Box>
      </Box>

      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </AppBar>
  );
}

export default BlogBar;
