import { Book } from "./Book.js"

export const Bookshelf = (props) => {
  const books = props.books.filter((book) => {
    return book.shelf === props.shelfName
  })

  return (
    <div>
      <h2 className="text-2xl font-medium border-b py-5 mb-5">
        {props.shelfNameReading}
      </h2>
      <div>
        <ol className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-5">
          {books.map(allBooks => (
            <li key={allBooks.id}>
              <Book 
                book={allBooks} 
                updateShelf={props.updateShelf} 
                activeShelf={props.shelfName} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}