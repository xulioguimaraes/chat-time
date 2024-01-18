import "./App.css";
import { Providers } from "./Providers";
import { Home } from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
export default App;
