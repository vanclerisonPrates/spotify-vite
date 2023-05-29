import { Details, Home, Navbar } from "./containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthentication } from "./hooks/useAuthentication";
import { Login } from "./components";

function App() {
  const CLIENT_ID = "c077968e58464e65a42ec1f64d362d72";
  const REDIRECT_URI = "http://localhost:8080";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const { token, onLogout } = useAuthentication();

  const props = {
    token: token,
    authEndpoint: AUTH_ENDPOINT,
    clientId: CLIENT_ID,
    redirectUrl: REDIRECT_URI,
    responseType: RESPONSE_TYPE,
  };

  return (
    <BrowserRouter>
      <main className={token ? "mt-20 " : "flex"}>
        <Navbar
          token={token}
          clientId={CLIENT_ID}
          redirectUrl={REDIRECT_URI}
          responseType={RESPONSE_TYPE}
          authEndpoint={AUTH_ENDPOINT}
          onLogout={onLogout}
        />
        <Routes>
          <Route path="/" element={token ? <Home /> : <Login {...props} />} />
          <Route
            path="/artist/:name"
            element={token ? <Details /> : <Login {...props} />}
          />
        </Routes>
      </main>
      <footer className="h-[125px]  bg-[#1ed760] w-full flex justify-center items-center text-[#222]">
        <div>©Copyright 2023 Direitos reservados</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
