import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes"
import { AuthProvider } from './contexts/auth';

import GlobalStyle from './styles/global';

import { Provider } from 'react-redux'
import store from "./store";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
          <BrowserRouter>
            <Router />
            <GlobalStyle />
          </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
}

export default App;