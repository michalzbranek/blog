import { Box, Toolbar, Typography } from "@mui/material";

// @ts-ignore: Object is possibly 'null'.
function Articles({ article, drawerWidth }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar sx={{ height: 120 }} />
      <Typography paragraph>{article.text}</Typography>
    </Box>
  );
}

export default Articles;
