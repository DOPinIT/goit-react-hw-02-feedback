import { Layout } from "./Layout/Layout.styled";
import { GlobalStyle } from './GlobalStyles';
import { Component } from "react";

import { Feedback } from './Feedback/feedback'
import { TotalClicks } from './Feedback/CounterClicks'

export class App extends Component {
          state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

    handleIncrementGood = () => { 
      this.setState((prevState) => (({
        good: prevState.good + 1,
        })))
  }

      handleIncrementNeutral = () => { 
      this.setState((prevState) => (({
        neutral: prevState.neutral + 1,
        })))
  }
  
        handleIncrementBad = () => { 
      this.setState((prevState) => (({
        bad: prevState.bad + 1,
        })))
  }
  
  render() {
    return (
    <Layout>
        <Feedback onClickIncrementGood={this.handleIncrementGood}
          onClickIncrementNeutral={this.handleIncrementNeutral}
        onClickIncrementBad={ this.handleIncrementBad }/>
        <TotalClicks CounterGood={this.state.good}
          CounterNeutral={this.state.neutral}
        CounterBad={this.state.bad}/>
        <GlobalStyle />
      </Layout>
    )
  }
  
};
