import React from 'react';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';
import BookCard from '../components/BookCard';

class Search extends React.Component {

    state = {
        search: "",
        results: []
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.search(this.state.search)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
            <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />
            {!this.state.results.length ? (
                <h1 className="text-center">No results to display</h1>
            ) : (
                <div>
                {this.state.results.map(book => (
                    <BookCard 
                    id={book.id}
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors.join(', ')}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    />
                ))}
                </div>
            )}
            </div>
            
        )
    }
}

export default Search;