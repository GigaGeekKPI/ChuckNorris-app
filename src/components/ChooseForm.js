import React from 'react';
import CategoryList from './CategoryList.js'

class ChooseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            decisionType: 'random',
            category: '',
            query: ''
        }
        //Fetch jokes
        this.getRandom = this.getRandom.bind(this);
        this.getFromCategory = this.getFromCategory.bind(this);
        this.getFromQuery = this.getFromQuery.bind(this);

        //Form handlers
        this.handleDecisionChange = this.handleDecisionChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();

        const decision = this.state.decisionType;
        const query = this.state.query;
        let joke;

        switch (decision) {
            case 'random':
                joke = await this.getRandom();
                break;
            case 'category':
                joke = await this.getFromCategory(this.state.category);
                break;
            case 'search':
                if (query.length > 0) {
                    let data = await this.getFromQuery(query).then(res => res.result);
                    joke = data[Math.floor(Math.random() * data.length)];

                } else {
                    joke = await this.getRandom();
                }
                break;
            default:
                break;
        }

        if (joke !== undefined && !joke.error) {
            joke.isFavourite = false;
            this.props.addJoke(joke);
        }
        else {
            alert('Error');
        }
    }

    handleDecisionChange(event) {
        this.setState({
            decisionType: event.target.value,
            category: '',
            query: ''
        });
    }

    onInputChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    onCategoryChange(event) {
        this.setState({
            category: event.target.value
        });
    }

    async getRandom() {
        let data = await fetch('https://api.chucknorris.io/jokes/random', {
            method: 'GET'
        }).then(res => res.json());

        return data;
    }

    async getFromCategory(category) {
        let data = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`, {
            method: 'GET'
        }).then(res => res.json());

        return data;
    }

    async getFromQuery(query) {
        let data = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`, {
            method: 'GET'
        }).then(res => res.json());

        return data;
    }

    render() {

        //Display or not display - ok
        let text;
        if (this.state.decisionType === 'search') {
            text = <input type='text' value={this.state.query} onChange={this.onInputChange} required placeholder='Free text search...' className='scale-in-hor-center'/>;
        }

        let categories;
        if (this.state.decisionType === 'category') {
            categories = <CategoryList category={this.state.category} onChange={this.onCategoryChange} />;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label className='radio-container'>
                    <input type='radio' name='ReqType' value='random' checked={this.state.decisionType === 'random'} onChange={this.handleDecisionChange} />
                    <span>Random</span>
                </label>
                <label className='radio-container'>
                    <input type='radio' name='ReqType' value='category' checked={this.state.decisionType === 'category'} onChange={this.handleDecisionChange} />
                    <span>From categories</span>
                </label>
                {categories}
                <label className='radio-container'>
                    <input type='radio' name='ReqType' value='search' checked={this.state.decisionType === 'search'} onChange={this.handleDecisionChange} />
                    <span>Search</span>
                </label>
                {text}
                <button className='submit-button'>Get a joke</button>
            </form>
        );
    }
}

export default ChooseForm;