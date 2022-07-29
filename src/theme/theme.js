import { createTheme }  from '@material-ui/core/styles'


const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#5d4037",
    },
    secondary: {
      main: "#B9090B",
    },
    background: {
      default: "#bcaaa4",
      paper: "#A1887F",
    },
  },
});
export default theme;
