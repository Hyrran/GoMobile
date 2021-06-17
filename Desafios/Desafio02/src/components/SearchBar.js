import { DebounceInput } from 'react-debounce-input';

export const SearchBar = (props) => {
  return (
		<div className="w-full border-b">
			<div>
				<DebounceInput 
					type="text" 
					placeholder="Pesquise livros por título ou autor..." 
					value={props.query}
					debouncetimeout={500}
					onChange={(e) => props.updateQuery(e.target.value)}
          className="w-full p-3 border-2 rounded-md"
				/>
			</div>
		</div>
	);
}