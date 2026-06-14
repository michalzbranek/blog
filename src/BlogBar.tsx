import { AppBar, IconButton, Typography, Box, useTheme } from "@mui/material";
// Named ESM imports from the package root — do NOT switch to deep CJS subpath imports
// (e.g. "@mui/icons-material/Menu"). Rolldown (Vite 8) mis-resolves their default export,
// causing React error #130 / blank page. See: https://github.com/rolldown/rolldown/issues
import { Menu as MenuIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from "@mui/icons-material";
import { useContext } from "react";
import { ColorModeContext } from "./main";

interface BlogBarProps {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

function BlogBar({ drawerWidth, handleDrawerToggle }: BlogBarProps) {
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
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            display: { sm: "none" },
            mr: 2,
            color: "text.primary",
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
            }}
          >
            BLOG
          </Typography>
        </Box>
      </Box>

      <IconButton
        onClick={() => {
          colorMode.toggleColorMode();
        }}
        sx={{ color: "text.primary" }}
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </AppBar>
  );
}

export default BlogBar;
