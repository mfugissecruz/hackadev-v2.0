import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes"
import { AuthProvider } from './contexts/auth';
import GlobalStyle from './styles/global';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;