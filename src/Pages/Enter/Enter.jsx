import { Link, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import Form, { Field } from "../../Components/Form";

const initialState = {
  nome: "",
  email: "",
  senha: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "nome":
      return { ...state, nome: payload };
    case "email":
      return { ...state, email: payload };
    case "senha":
      return { ...state, senha: payload };

    default:
      throw new Error("Erro");
  }
}

export default function Login() {
  const [{ nome, email, senha }, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ nome, email, senha }));

    navigate(`/user/${nome}`);
  }

  return (
    <Form
      title="Entrar"
      onSubmit={handleSubmit}
      className="form"
      btnClassName="button"
      btnText="Entrar"
      messageLink={
        <p>
          Não possui uma conta? <Link to="/signin">Cadastre-se aqui</Link>
        </p>
      }
    >
      <Field label="Nome:" value={nome} dispatch={dispatch} type="nome" />
      <Field label="Email:" value={email} dispatch={dispatch} type="email" />
      <Field
        label="Senha:"
        inputType="password"
        value={senha}
        dispatch={dispatch}
        type="senha"
      />
    </Form>
  );
}
export function SignIn() {
  const [{ nome, email, senha }, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ nome, email, senha }));

    navigate(`/user/${nome}`);
  }

  return (
    <>
      <Form
        title="Cadastrar"
        onSubmit={handleSubmit}
        className="form"
        btnClassName="button"
        btnText="Cadastrar"
        messageLink={
          <p>
            Já possui uma conta? <Link to="/login">Entre aqui</Link>
          </p>
        }
      >
        <Field label="Nome:" value={nome} dispatch={dispatch} type="nome" />
        <Field label="Email:" value={email} dispatch={dispatch} type="email" />
        <Field
          label="Senha:"
          inputType="password"
          value={senha}
          dispatch={dispatch}
          type="senha"
        />
      </Form>
    </>
  );
}
