import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./modules/landing/components/LandingPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import store, { persistor } from "./store";
import './App.css';
import LoginPage from "./modules/login/components/LoginPage";
import Firebase,{auth} from "./config/Firebase";

export default function App() {
  const name = auth?.currentUser;
 if(Firebase)
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
             {!name &&
              <Route path="/" element={<LandingPage />}>
                <Route exact index element={<LoginPage />} />
                <Route exact path={"login"} element={<LoginPage />} />
              </Route>
              }
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

