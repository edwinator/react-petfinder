import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  handleTitleClick() {
    alert('you clicked');
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt A Pet</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        <Pet name="Doink" animal="Cat" breed="Mix" />
      </div>
    );
    // return React.createElement('div', {}, [
    //   React.createElement(
    //     'h1',
    //     { onClick: this.handleTitleClick },
    //     'Adopt Me!'
    //   ),
    //   React.createElement(Pet, {
    //     name: 'Luna',
    //     animal: 'Dog',
    //     breed: 'Havanese'
    //   }),
    //   React.createElement(Pet, {
    //     name: 'Pepper',
    //     animal: 'Bird',
    //     breed: 'Cockatiel'
    //   }),
    //   React.createElement(Pet, {
    //     name: 'Doink',
    //     animal: 'Cat',
    //     breed: 'Mix'
    //   })
    // ]);
  }
}

render(React.createElement(App), document.getElementById('root'));
