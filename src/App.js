import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Rutas from "./routes/Rutas";

function App() {
  return (
      <UserProvider>
        <BrowserRouter>
        <Rutas />
      </BrowserRouter>
        
      </UserProvider>
      
  );
}

export default App;
