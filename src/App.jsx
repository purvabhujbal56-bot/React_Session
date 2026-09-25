/*import Hello from "./Mycomponents/Hello";
import Bye from "./Mycomponents/Bye";

function App() {
  return (
    <>
      <Hello />
      <Bye />
    </>
  );
}

export default App;*/

/*import Parent from "./Mycomponents/Parent";

function App() {
  return (
    <>
      <Parent />
    </>
  );
}

export default App;*/

import Counter from "./Mycomponents/Counter";
import User from "./Mycomponents/User";

function App() {
  return (
    <div>
      <h1>React useState and Props Example</h1>

      <User name="Purva" course="MCA" />

      <Counter />
    </div>
  );
}

export default App;