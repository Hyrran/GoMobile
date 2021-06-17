export const ShelfChanger = (props) => {
  return(
    <div>
      <select onChange={(e) => props.updateShelf(props.book, e.target.value)} defaultValue={props.activeShelf} className="p-3 rounded-md border-2">
        <option value="" disabled>Mover para...</option>
        <option value="currentlyReading">Lendo</option>
        <option value="wantToRead">Quero ler</option>
        <option value="read">Lido</option>
        <option value="none">Nenhum</option>
      </select>
    </div>
  );
}