import { Box, Toolbar, Typography, Container, Divider, useTheme } from "@mui/material";

// @ts-ignore: Object is possibly 'null'.
function Articles({ article, drawerWidth }) {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 6 },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        backgroundColor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Toolbar sx={{ height: { xs: 70, sm: 80 } }} />
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 2,
            color: "primary.main",
            fontSize: { xs: "2.5rem", sm: "3.5rem" },
            textAlign: "center",
          }}
        >
          {article.name}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Divider sx={{ width: "60px", borderBottomWidth: 4, borderColor: "primary.main" }} />
        </Box>

        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            color: "text.primary",
            textAlign: "justify",
            textJustify: "inter-word",
            fontSize: "1.2rem",
            lineHeight: 1.8,
          }}
        >
          {article.text}
        </Typography>
      </Container>
    </Box>
  );
}

export default Articles;
