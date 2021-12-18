import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import {store} from "./Components/redux/store" 
import CakeContainerWithHook from './Components/CakeContainerWithHook';
import IceCreamContainer from './Components/IceCreamContainer';

function App() {
  return (
    <Provider store = {store}>
    <div>
      <CakeContainer></CakeContainer>
      <CakeContainerWithHook></CakeContainerWithHook>
      <IceCreamContainer></IceCreamContainer>
    </div>
    </Provider>
  )
}

export default App;
