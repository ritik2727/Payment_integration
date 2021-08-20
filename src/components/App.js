import { ThemeProvider } from '@material-ui/styles';
import React ,{useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import LandingPage from './LandingPage';
import Services from './Services';
import Footer from './ui/Footer';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)
  return (
   <ThemeProvider theme={theme} >
     <BrowserRouter>
     <Header value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          />
          <Switch>
            <Route exact path='/'   
              render={(props)=>(
                <LandingPage
                  {...props} 
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/contact' component={ContactUs} />
          </Switch>
        <Footer/>
     </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
