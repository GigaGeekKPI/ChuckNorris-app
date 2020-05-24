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
        if (!this.props.joke.isFavourite) {
            this.props.joke.isFavourite = !this.props.joke.isFavourite;
            this.props.addFavourite(this.props.joke);
        } else {
            this.props.joke.isFavourite = !this.props.joke.isFavourite;
            this.props.removeFavourite(this.props.joke);
        }
        this.setState({
            joke: this.props.joke
        });
    }

    render() {
        let shape = this.props.joke.isFavourite ? 'favorite' : 'favorite_border';
        let now = new Date();
        let msAgo = now - new Date(this.props.joke.updated_at);
        return (
            <article className='joke-container'>
                <button onClick={this.handleClick} className='like-button'>
                    <span className="material-icons" style={{ color: '#FF6767' }}>{shape}</span>
                </button>
                <section className='joke-content'>
                    <p className="message">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2504 0H2.74963C1.23352 0 0 1.23328 0 2.74963V11.6238C0 13.1367 1.22815 14.368 2.73987 14.3734V18.4004L8.5271 14.3734H17.2504C18.7665 14.3734 20 13.1399 20 11.6238V2.74963C20 1.23328 18.7665 0 17.2504 0ZM18.8281 11.6238C18.8281 12.4937 18.1204 13.2015 17.2504 13.2015H8.15942L3.91174 16.1573V13.2015H2.74963C1.87964 13.2015 1.17188 12.4937 1.17188 11.6238V2.74963C1.17188 1.87952 1.87964 1.17188 2.74963 1.17188H17.2504C18.1204 1.17188 18.8281 1.87952 18.8281 2.74963V11.6238Z" fill="#ABABAB" />
                            <path d="M5.35291 4.14075H14.6471V5.31262H5.35291V4.14075Z" fill="#ABABAB" />
                            <path d="M5.35291 6.64075H14.6471V7.81262H5.35291V6.64075Z" fill="#ABABAB" />
                            <path d="M5.35291 9.14075H14.6471V10.3126H5.35291V9.14075Z" fill="#ABABAB" />
                        </svg>
                    </p>
                    <div className='joke-content-info'>
                        <p className='joke-content-info-id'>
                            ID:<a href={this.props.joke.url}>{this.props.joke.id}</a>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.54545 0H5.90909C5.65806 0 5.45454 0.203515 5.45454 0.45455C5.45454 0.705585 5.65806 0.9091 5.90909 0.9091H8.44809L3.76952 5.58768C3.59204 5.76516 3.59204 6.05298 3.76952 6.2305C3.85825 6.31923 3.97458 6.36362 4.09091 6.36362C4.20724 6.36362 4.32359 6.31923 4.4123 6.23048L9.09092 1.55191V4.09091C9.09092 4.34194 9.29444 4.54546 9.54547 4.54546C9.7965 4.54546 10 4.34194 10 4.09091V0.45455C10 0.203515 9.79648 0 9.54545 0Z" fill="#8EA7FF" />
                                <path d="M7.72725 4.54543C7.47622 4.54543 7.2727 4.74894 7.2727 4.99998V9.09089H0.90908V2.72725H4.99999C5.25103 2.72725 5.45454 2.52373 5.45454 2.2727C5.45454 2.02166 5.25103 1.81817 4.99999 1.81817H0.45455C0.203515 1.81817 0 2.02168 0 2.27272V9.54544C0 9.79645 0.203515 9.99997 0.45455 9.99997H7.72727C7.97831 9.99997 8.18182 9.79645 8.18182 9.54542V4.99998C8.1818 4.74894 7.97829 4.54543 7.72725 4.54543Z" fill="#8EA7FF" />
                            </svg>

                        </p>
                        <p className='joke-content-info-value'>{this.props.joke.value}</p>
                        <div className='joke-secondary-content'>
                            <p>Last update: <span>{convertMsToHours(msAgo)} hours ago</span></p>
                            <Category category={this.props.joke.categories} />
                        </div>
                    </div>
                </section>

            </article>
        );
    }
}

export default Joke;