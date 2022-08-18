// STYLES
import './App.css';

function App() {
  let image = "kqXt7Sq2.png";
  let title = "Doble Cuarto de Libra con Queso";
  let calories =  "771 kcal";
  let text = "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.";

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <img src={image} alt={title} className="img-sluid" />
        </div>
        <div className="col-md-4">
          <h1 className="fw-bold">
            {title}
          </h1>
          <h5>
            {calories}
          </h5>
          <p className="mt-3">
            {text}
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
