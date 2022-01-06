export default function Paginacion(props) {
  //este metodo es mas facil de leer que el de la paginacion de abajo llamarlo {getpaginas}
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
        let pagina = i + 1;
      resultado.push(
        <a
          onclick={() => props.onChange(pagina)}
          className={props.pagina === pagina ? "active" : ""}
        >
          {pagina}
        </a>
      );
    }
  };
  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <select>
        <option value="range">5 Movies</option>
        <option value="saab">10 Movies</option>
      </select>
      <div className="pagination2">
        <span>
          Pagina {props.pagina} de {props.total}:
        </span>

        {getPaginas()}
      </div>
    </div>
  );
}
