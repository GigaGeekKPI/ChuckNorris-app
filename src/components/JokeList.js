import React from 'react';
import Joke from './Joke.js'
class JokeList extends React.Component {

    render() {
        return (
            <>
                {this.props.jokes.map(el => <Joke joke={el} />)}
            </>
        );
    }
}

export default JokeList;