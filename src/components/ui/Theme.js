import { createTheme } from '@material-ui/core/styles';
 
const arcBlue = '#0B72B9';
const arcOrange = '#ffd100';
const arcGrey ='#868686'
const arcBlack = '#000000'
 
export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      black:arcBlack
    },
    primary: {
      main: arcBlack
    },
    secondary: {
      main: arcOrange
    }
  },
  typography:{
      tab:{
        fontFamily:  'Raleway',
        textTransform:'none',
        fontWeight:600,
        fontSize:'1.1rem',
        color:'white'
      },
      estimate:{
        fontFamily:'Pacifico',
        fontSize:'1rem',
        textTransform:'none',
        color:'white'
      },
      h2:{
        fontFamily:'Raleway',
        fontWeight:700,
        fontSize:'2.5rem',
        color:arcBlack,
        lineHeight:1.5
      },
      h3: {
        fontFamily: "Raleway",
        fontSize: "2.5rem",
        color: arcBlack,
        fontWeight:700
      },
      h4:{
        fontFamily:'Raleway',
        fontSize:'1.75rem',
        color:arcBlack,
        fontWeight:700
      },
      subtitle1:{
        fontSize:'1.25rem',
        fontWeight:300,
        color:arcGrey
      },
      subtitle2: {
        color: "white",
        fontWeight: 300,
        fontSize: "1.25rem"
      },
      body1: {
        fontSize: "1.25rem",
        color: arcGrey,
        fontWeight: 300
      },
      caption: {
        fontSize: "1rem",
        fontWeight: 300,
        color: arcGrey
      },
      learnButton: {
        borderColor: arcBlue,
        borderWidth: 2,
        textTransform: "none",
        color: arcBlue,
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold"
      }
  },
  overrides :{
    MuiInputLabel:{
      root:{
        color:arcBlack,
        fontSize:'1rem'
      }
    },
    MuiInput:{
      root: {
        color: arcGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlack}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlack}`
        }
      }
    }
  }
});
