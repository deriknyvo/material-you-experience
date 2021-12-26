import { createTheme } from "@mui/material";
import { lime } from "@mui/material/colors";

export default createTheme({
  palette: {
    primary: {
      main: lime[500],
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '0 16px',
        },
      }
    }
  }
})