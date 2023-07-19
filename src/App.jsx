import { useState } from "react";
import "./App.css";
import {Counter} from "./components/Counter";
import { Text } from "./components/Text";
import {Grid} from "./components/Grid";

function App() {
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();

  const handleIncrementRow = () => {
      setRows(rows + 1);
  };

  const handleDecrementRow = () => {
      if (rows <= 0) {
          return;
      }
      setRows(rows - 1);
  };

  const handleIncrementColumn = () => {
    if (columns >= 9) {
      return;
  }
    setColumns(columns + 1);
};

const handleDecrementColumn = () => {
    if (columns <= 0) {
        return;
    }
    setColumns(columns - 1);
};

const totalLights = rows * columns;

const lights = Array.from({totalLights})


  return (
    <div>
<nav className={"nav"}>
<Text> {totalLights} bulbs</Text>
<Counter text={'rows'} count={rows} 
onIncrement={handleIncrementRow}
onDecrement={handleDecrementRow}
/>
      <Counter text={'columns'} 
      count={columns}
      onIncrement={handleIncrementColumn}
      onDecrement={handleDecrementColumn}
      />
</nav>
<Grid columns={columns}>

  {lights.map((value, index) => {
return <SingleLight key={id} />;
  })}
  </Grid>

    </div>
  ); 
}

export default App;
