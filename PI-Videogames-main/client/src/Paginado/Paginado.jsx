import Styles from "./Paginado.module.css";

function Paginado({ paginado, totaljuegos, videoJuegosPorPagina }) {
  console.log(totaljuegos, videoJuegosPorPagina);
  const numeroDePaginas = [];

  for (let i = 1; i <= Math.ceil(totaljuegos / videoJuegosPorPagina); i++) {
    numeroDePaginas.push(i);
  }
  return (
    <div className={Styles.contenedorG}>
      <nav>
        <ul>
          {numeroDePaginas &&
            numeroDePaginas.map((numero) => (
              <nav className={Styles.contenedor} key={numero}>
                <button
                  className={Styles.paginado}
                  onClick={() => paginado(numero)}
                >
                  {numero}
                </button>
              </nav>
            ))}
        </ul>
      </nav>
    </div>
  );
}
export default Paginado;
