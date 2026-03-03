import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameTimerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  handlerContextMenu = document.addEventListener(
    'contextmenu',
    (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    },
  );

  handlerClick = document.addEventListener('click', () => {
    this.setState({ hasClock: true });
  });

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
