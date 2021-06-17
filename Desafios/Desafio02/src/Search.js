import React from 'react';
import { Book } from './components/Book.js';
import { SearchBar } from './components/SearchBar.js';
import * as API from './BooksAPI';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      query: "",
      searchBooks: []
    }
  }

  updateQuery = (userQuery) => {
    this.setState({
      query: userQuery
    })
    this.updateBookSearch(userQuery)
  }

  updateBookSearch = (userQuery) => {
    if(userQuery) {
      API.search(userQuery).then(booksResult => {
        if(booksResult.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: booksResult })
        }
      })
    } else {
      this.setState({ searchBooks: [] })
    }
  }

  render() {
    return (
      <div className="space-y-10">
        <SearchBar query={this.state.query} updateQuery={this.updateQuery}/>

        <div>
          <ol className="grid grid-cols-4 gap-10">
            {this.state.searchBooks.map((theBooks) => {
              let shelf = "none";

              this.props.books.map(book => (
                book.id === theBooks.id ? shelf = book.shelf : "none"
              ));

              return (
                <li key={theBooks.id}>
                  <Book book={theBooks} updateShelf={this.props.updateShelf} activeShelf={shelf} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
