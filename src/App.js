import React from 'react';
import Greeting from './components/Greeting.js';
import ChooseForm from './components/ChooseForm.js';
import JokeList from './components/JokeList.js';
import Burger from './components/Burger.js'
import './App.css';
import { CSSTransition } from 'react-transition-group'

// localStorage.removeItem('favourite');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      favourite: JSON.parse(localStorage.getItem('favourite') || '[]'),
      tick: false,
      hidden: false
    }

    this.addJoke = this.addJoke.bind(this);
    this.addFavourite = this.addFavourite.bind(this);
    this.removeFavourite = this.removeFavourite.bind(this);
    this.toggle = this.toggle.bind(this);
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
    localStorage.setItem('favourite', JSON.stringify(favourite));
    this.setState({
      tick: !this.state.tick
    })
  }

  toggle() {
    this.setState({
      hidden: !this.state.hidden
    });
    console.log(this.state.hidden);
  }

  removeFavourite(item) {
    const favourite = this.state.favourite;
    const itemIndex = favourite.indexOf(item);
    favourite.splice(itemIndex, 1);
    localStorage.setItem('favourite', JSON.stringify(favourite));
    this.setState({
      tick: !this.state.tick
    })
  }

  render() {
    let aside;
    let asideMove = window.matchMedia("(max-width: 480px)").matches ? '0%' : '40%';

    if (this.state.hidden) {
      aside = <div className='hidden-aside-container' style={{ left: asideMove }}>
        <aside className='Favourite'>
          <JokeList jokes={this.state.favourite} removeFavourite={this.removeFavourite} />
        </aside>
      </div>
    } else {
      aside = <div className='hidden-aside-container' style={{ left: '100%' }}>
        <aside className='Favourite'>
          <JokeList jokes={this.state.favourite} removeFavourite={this.removeFavourite} />
        </aside>
      </div>
    }
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
            <JokeList jokes={this.state.favourite} removeFavourite={this.removeFavourite} />
          </aside>
        </div>
        <Burger toggle={this.toggle} hidden={this.state.hidden} />
        {aside}
        <CSSTransition in={this.state.hidden} timeout={300} classNames="example">
          <div className='dark-side-main' />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
