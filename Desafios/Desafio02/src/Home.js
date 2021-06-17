import React from "react";
import { Bookshelf } from "./components/Bookshelf.js";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Bookshelf updateShelf={this.props.updateShelf} shelfName="currentlyReading" shelfNameReading="Estou lendo" books={this.props.bookCollection}/>
        <Bookshelf updateShelf={this.props.updateShelf} shelfName="wantToRead" shelfNameReading="Quero ler" books={this.props.bookCollection}/>
        <Bookshelf updateShelf={this.props.updateShelf} shelfName="read" shelfNameReading="Já li" books={this.props.bookCollection}/>
      </div>
    );
  }
}