import PointlessApp from "./components/PointlessApp/PointlessApp";

const App = () => {
  return (
    <div>
      <h1>The Pointless App</h1>
      <p>
        Generate a random string array. Then add as many transformations as you
        want. You can add duplicates of the same transformation. Transformations
        will happen in the order they are added.
      </p>
      <PointlessApp/>
    </div>
  
  )
};

export default App;
