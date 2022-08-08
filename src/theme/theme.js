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
      default: "#256D85",
      paper: "#94B49F",
    },
  },
});
export default theme;
