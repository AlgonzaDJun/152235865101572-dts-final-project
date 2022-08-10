import { createTheme }  from '@material-ui/core/styles'


const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2B4865",
    },
    secondary: {
      main: "#8FE3CF",
    },
    background: {
      default: "#ffffff",
      paper: "#256D85",
    },
  },
});
export default theme;
