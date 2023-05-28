import "./App.css";
import gStore from "./assets/images/grocery-store.jpg";
import prods from "./products";
function App() {
  let productsList = prods.map((prod) => (
    <div className="fruit1">
      <img src={prod.image} alt="Mango" className="prodimg"></img>
      <div>{prod.name}</div>
      <div>{prod.price}</div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <h1>Grocery store</h1>
        <h4>Buy your favorite fruits here</h4>
        <img src={gStore} className="store" alt="market"></img>
      </div>
      <div className="products">
        <div className="prods">
          <div className="fruit1">
            <img src={prods[0].image} alt="Mango" className="prodimg"></img>
            <div>{prods[0].name}</div>
            <div>{prods[0].price}</div>
          </div>
          <div className="fruit2">
            <img src={prods[1].image} alt="Apple" className="prodimg"></img>
            <div>{prods[1].name}</div>
            <div>{prods[1].price}</div>
          </div>
          {productsList}
        </div>
      </div>
    </>
  );
}

export default App;
