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
          height: 120,
          borderBottom: 1,
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        elevation={0}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          component="span"
          onClick={handleDrawerToggle}
          sx={{
            pt: 0,
            pl: 6,
            display: { sm: "none" },
            width: 40,
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
          component="span"
          sx={{
            marginTop: { xs: 3, sm: 3 },
            fontSize: { xs: 27.5, sm: 30 },
            display: { xs: "inline-block", sm: "block" },
            marginLeft: { xs: 4, sm: 3 },
          }}
        >
          MICHAL ZBRANEK
        </Typography>
        <Typography
          align="left"
          component="span"
          fontFamily={"Russo One"}
          sx={{
            fontSize: { xs: 20, sm: 20 },
            display: "block",
            marginLeft: { xs: 9.5, sm: 3 },
            marginTop: { xs: -2, sm: 0 },
          }}
        >
          BLOG
        </Typography>
      </AppBar>
  );
}

export default BlogBar;
