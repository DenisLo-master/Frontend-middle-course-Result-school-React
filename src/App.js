import Task1 from './components/Task1.jsx';
import Task2 from './components/Task2.jsx';
import Task3 from './components/Task3.jsx';

function App() {

  return (
    <>
      <div style={
        {
          display: "flex",
          margin: "5px",
          height: "50vh",
          border: "1px solid black",
          flexDirection: "row",
          justifyContent: "space-around",

        }
      }>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №1</h2>
          <Task1 />
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №2</h2>
          <Task2 />
        </div>
      </div>
      <div style={
        {
          display: "flex",
          margin: "5px",
          height: "50vh",
          border: "1px solid black",
          flexDirection: "row",
          justifyContent: "space-around"
        }
      }>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №3</h2>
          <Task3 />
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №4</h2>
          <Task2 />
        </div>
      </div>
    </>
  );
}

export default App