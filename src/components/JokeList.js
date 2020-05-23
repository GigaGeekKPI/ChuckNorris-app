import React from 'react';
import Joke from './Joke.js'
class JokeList extends React.Component {
    render() {
        return (
            <>
                {this.props.jokes.map(el => <Joke joke={el} addFavourite={this.props.addFavourite} removeFavourite={this.props.removeFavourite} />)}
            </>
        );
    }
}

export default JokeList;