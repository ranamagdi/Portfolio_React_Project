import { BrowserRouter, Routes,Route,HashRouter} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>

      </Routes>
    </HashRouter>
  );
}

export default App;
