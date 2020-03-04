import React from 'react';
import Cars from './components/CarList/Cars';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocaleContext, ThemeContext} from './context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      language: 'ro'
    }
  }  

  changeLanguage = (e) => {
    e.preventDefault();

    let lang = e.target.value;
    
    this.setState({
      language: lang
    });
  }
  
  changeTheme = (e) => {
    e.preventDefault();
    let themes = e.target.value;

    this.setState({
      theme: themes
    });
  }

  render () {

    return (
      <ThemeContext.Provider value={{style: this.state.theme}}>
        <LocaleContext.Provider value={{language: this.state.language}}>
          <div className="App">
            <Header logo={"/images/logo.png"} title={"Dacia"} subtitle={"Fiabilitate inainte de toate"} language={this.state.language} changeLanguage={this.changeLanguage}   theme={this.state.theme} changeTheme={this.changeTheme} />
            <Cars />
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
