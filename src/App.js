import "./App.css";
import image from "./assets/images/myPhoto.jpg";
function App() {
  return (
    <div className="container">
      <h1>My first React task</h1>
      <h4>This is an image of myself</h4>
      <img src={image} className="myImage" alt="me"></img>
    </div>
  );
}

export default App;
