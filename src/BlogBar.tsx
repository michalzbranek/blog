import { AppBar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// @ts-ignore: Object is possibly 'null'.
function BlogBar({drawerWidth, handleDrawerToggle}) {
  return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: { xs: 120, sm: 170 },
          borderBottom: 1,
          backgroundColor: "white",
          color: "black",
        }}
        elevation={0}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            position: 'absolute',
            top: 34,
            left: 14,
            display: { sm: "none" },
            ":hover": {
              backgroundColor: "white",
            },
          }}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <Typography
          fontFamily={"Russo One"}
          noWrap
          component="div"
          sx={{
            marginTop: { xs: 3, sm: 3 },
            fontSize: { xs: 27.5, sm: 50 },
            marginLeft: { xs: 10, sm: 3 },
          }}
        >
          MICHAL ZBRANEK
        </Typography>
        <Typography
          align="left"
          component="div"
          fontFamily={"Russo One"}
          sx={{
            fontSize: { xs: 20, sm: 35 },
            marginLeft: { xs: 10, sm: 3 },
            marginTop: { xs: 0, sm: 0 },
          }}
        >
          BLOG (TEST)
        </Typography>
      </AppBar>
  );
}

export default BlogBar;
