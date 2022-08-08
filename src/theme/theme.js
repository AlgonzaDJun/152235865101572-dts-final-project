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
      default: "#94B49F",
      paper: "#256D85",
    },
  },
});
export default theme;
