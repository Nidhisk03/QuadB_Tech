
import Home from "./Components/Home";
import appStore from "./utils/appStore"
import { Provider } from 'react-redux';
import Body from "./Components/Body"

function App() {

  
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>

    </>






  );
}

export default App;
