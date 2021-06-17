import { ShelfChanger } from './ShelfChanger.js';

export const Book = (props) => {			
	let image = props.book.imageLinks ? props.book.imageLinks.thumbnail : "";

	return (
		<div className="rounded-md border-2 text-center p-5 h-full">
			<div className="mb-5">
				<div className="rounded-lg mx-auto mb-5" style={{width: 128, height: 193, backgroundImage: `url("${image}")`}}></div>
    			<div className="text-lg font-medium">{props.book.title}</div>
			    <div className="text-gray-400 italic">{props.book.authors}</div>
			</div>
			<ShelfChanger book={props.book} updateShelf={props.updateShelf} activeShelf={props.activeShelf}/>
		</div>
	);
}
