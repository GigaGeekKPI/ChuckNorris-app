import React from 'react';
import Category from './Category'

function convertMsToHours(ms) {
    return Math.floor(ms / 1000 / 60 / 60);
}

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: this.props.joke
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(!this.props.joke.isFavourite) {
            this.props.joke.isFavourite = !this.props.joke.isFavourite;
            this.props.addFavourite(this.props.joke);
        } else {
            this.props.joke.isFavourite = !this.props.joke.isFavourite;
            this.props.removeFavourite(this.props.joke);
        }
        this.setState({
            joke: this.props.joke
        });
        console.log(this.props.joke);
    }

    render() {
        let shape = this.props.joke.isFavourite ? 'favorite' : 'favorite_border';

        let now = new Date();
        let msAgo = now - new Date(this.props.joke.updated_at);
        return (
            <div>
                <span>ID:</span><a href={this.props.joke.url}>{this.props.joke.id}</a>
                <p>{this.props.joke.value}</p>
                <span>Last update: {convertMsToHours(msAgo)} hours ago</span>

                <Category category={this.props.joke.categories}/>

                <button onClick={this.handleClick} >
                    <span className="material-icons" style={{ color: '#FF6767' }}>{shape}</span>
                </button>
            </div>
        );
    }
}

export default Joke;