import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";

import User, { UserHome } from "../Pages/User/User";
import Agendar from "../Pages/User/Agendar";
import Registrar from "../Pages/User/Registrar";
import Reposicao from "../Pages/User/Reposicao";
import Clientes from "../Pages/User/Clientes";
import Manutencoes from "../Pages/User/Manutencoes";
import Estoque from "../Pages/User/Estoque";
import Login, { SignIn } from "../Pages/Enter/Enter";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="user/:nome" element={<User />}>
          <Route index element={<UserHome />} />
          <Route path="agendar" element={<Agendar />} />
          <Route path="manutencoes" element={<Manutencoes />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="reposicao" element={<Reposicao />} />
          <Route path="estoque" element={<Estoque />} />
        </Route>
      </Routes>
    </div>
  );
}
