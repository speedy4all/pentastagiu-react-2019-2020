import React from 'react';
import Header from './header/Header';
import MainContainer from './components/MainContainer';
import { DisplayListContext, CurrencyContext } from './context/context';
import './App.css';


  class App extends React.Component {
    state = {
      titleList: {title: "Homework", subtitle: "carStuff"},
      listToDisplay: 'Cars',
      currencyList: [{coin: '€', rate: 1}, {coin: '$', rate: 1.1}, {coin: '£', rate: 0.85}, {coin: '¥', rate: 120}],
      currency: {coin: '€', rate: 1}
    };

    changeDisplayList = (list) => {
      let listToDisplay = list === 'Cars' ? 'Cart' : 'Cars';
      this.setState({
        listToDisplay
      })
    }

    changeCurrency = (e) => {
      const coin = e.currentTarget.value;
      const currency = this.state.currencyList.find(el => el.coin === coin);
      this.setState ({
        currency
      })
    }

    render() {
      return (
        <DisplayListContext.Provider value={ {display: this.state.listToDisplay} }>
          <Header 
          {...this.state.titleList} 
          toggleList={ this.changeDisplayList }
          changeCurrency={ this.changeCurrency }
          currencyList={ this.state.currencyList }/>
          <CurrencyContext.Provider value={ {currency: this.state.currency} }>            
            <MainContainer />
          </CurrencyContext.Provider>
        </DisplayListContext.Provider>
      )}
  }

export default App;
