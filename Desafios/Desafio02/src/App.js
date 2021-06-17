import React from "react";
import Home from "./Home";
import Search from "./Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as API from './BooksAPI';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: []
    }
  }

  componentDidMount() {
    this.stateUpdate();
  }

  stateUpdate() {
    API.getAll().then((data) => {
      this.setState({ allBooks: data })
    })
  }

  updateShelf = (book, shelf) => {
    API.update(book, shelf).then(() => {
      this.stateUpdate();
    });
  }

  render () {
    return (
      <Router>
        <div className="container mx-auto my-10 shadow-md rounded-lg bg-white overflow-hidden">
          <div className="text-4xl font-bold text-center p-10 text-indigo-600">
            Livros do Gustavinho
          </div>
          <nav className="bg-indigo-500 text-white py-5 px-10">
            <ul className="flex items-center justify-between">
              <li className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-lg">
                <Link to="/">Meus livros</Link>
              </li>
              <li className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-lg">
                <Link to="/pesquisar">Pesquisar novos livros</Link>
              </li>
            </ul>
          </nav>
  
          <div className="p-10">
            <Switch>
              <Route path="/pesquisar">
                <Search
                  updateShelf={this.updateShelf}
                  books={this.state.allBooks}
                />
              </Route>
              <Route path="/">
                <Home
                  bookCollection={this.state.allBooks} 
                  updateShelf={this.updateShelf}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
