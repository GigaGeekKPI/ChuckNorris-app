import React from 'react';
import Greeting from './components/Greeting.js';
import ChooseForm from './components/ChooseForm.js';
import JokeList from './components/JokeList.js';
import './App.css';

// localStorage.removeItem('favourite');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      favourite: JSON.parse(localStorage.getItem('favourite') || '[]'),
      tick: false
    }

    this.addJoke = this.addJoke.bind(this);
    this.addFavourite = this.addFavourite.bind(this);
    this.removeFavourite = this.removeFavourite.bind(this);
  }

  addJoke(item) {
    const jokes = this.state.jokes;
    jokes.unshift(item);
    this.setState({
      tick: !this.state.tick
    })
  }

  addFavourite(item) {
    const favourite = this.state.favourite;
    favourite.unshift(item);
    console.table(this.state.favourite);
    localStorage.setItem('favourite', JSON.stringify(favourite));
    this.setState({
      tick: !this.state.tick
    })
  }

  removeFavourite(item) {
    const favourite = this.state.favourite;
    const itemIndex = favourite.indexOf(item);
    console.log(itemIndex);
    favourite.splice(itemIndex, 1);
    localStorage.setItem('favourite', JSON.stringify(favourite));
    this.setState({
      tick: !this.state.tick
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='main-container'>
          <header className='main-header'>
            <h1>MSI 2020</h1>
          </header>
          <main>
            <article>
              <Greeting />
              <section>
                <ChooseForm addJoke={this.addJoke} />
              </section>
              <JokeList jokes={this.state.jokes} addFavourite={this.addFavourite} removeFavourite={this.removeFavourite} />
            </article>
          </main>
        </div>
        <div className='aside-container'>
          <aside className='Favourite'>
            <h2>Favourite</h2>
            <JokeList jokes={this.state.favourite} style={{ color: 'green' }} removeFavourite={this.removeFavourite} />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
