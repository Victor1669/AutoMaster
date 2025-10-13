import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../../Components/Header";
import Main from "../../Components/Main";

export default function User() {
  const { nome } = useParams();

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="index">
      <Header clickLogo={() => navigate(`/user/${nome}`)}>
        <span className="btn-container">
          <NavLink to="manutencoes" className="button link">
            Agendamentos
          </NavLink>
          <NavLink to="clientes" className="button link">
            Clientes
          </NavLink>
          <NavLink to="estoque" className="button link">
            Estoque
          </NavLink>
          <MenuButton onShowMenu={setShowMenu} />
          <MenuContainer onShowMenu={setShowMenu} showMenu={showMenu} />
        </span>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
export function UserHome() {
  const { nome } = useParams();

  return <h2>Olá, {nome}</h2>;
}

function MenuContainer({ showMenu, onShowMenu }) {
  return (
    <div aria-selected={showMenu} className="menu-container">
      <MenuButton onShowMenu={onShowMenu} />
      <NavLink to="agendar" className="link">
        Agendar Manutenção
      </NavLink>
      <NavLink to="registrar" className="link">
        Registrar Cliente
      </NavLink>
      <NavLink to="reposicao" className="link">
        Reposição
      </NavLink>
    </div>
  );
}
function MenuButton({ onShowMenu }) {
  return (
    <button onClick={() => onShowMenu((s) => !s)} className="menu-button">
      <img src="/menu.png" alt="Menu" />
    </button>
  );
}
