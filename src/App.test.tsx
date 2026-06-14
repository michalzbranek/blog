import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App";

const theme = createTheme();

test("renders without crashing", () => {
  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
  expect(document.body.firstChild).not.toBeNull();
});
