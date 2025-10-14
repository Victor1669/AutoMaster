import { useReducer, useRef } from "react";
import Form, { Field } from "../../Components/Form";

const initialState = {
  nome: "",
  tipo: "",
  quantidade: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "nome":
      return { ...state, nome: payload };
    case "tipo":
      return { ...state, tipo: payload };
    case "quantidade":
      return { ...state, quantidade: payload };
    case "clear":
      return {
        nome: "",
        tipo: "",
        quantidade: "",
      };
    default:
      throw new Error("Ação inválida!");
  }
}

export default function Reposicao() {
  const [{ nome, tipo, quantidade }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const ipt1 = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const stored = localStorage.getItem("estoque") || "[]";

    const estoque = JSON.parse(stored);
    const newPeca = { nome, tipo, quantidade };
    const updatedEstoque = [...estoque, newPeca];

    localStorage.setItem("estoque", JSON.stringify(updatedEstoque));
    dispatch({ type: "clear" });
    ipt1.current.focus();
  }

  return (
    <Form
      title="Adicionar Peça"
      className="form"
      btnText="Adicionar"
      btnClassName="button"
      onSubmit={handleSubmit}
    >
      <Field
        inputRef={ipt1}
        label="Nome da Peça: "
        type="nome"
        value={nome}
        dispatch={dispatch}
      />
      <Field
        label="Tipo da peça:"
        type="tipo"
        value={tipo}
        dispatch={dispatch}
      />
      <Field
        label="Quantidade: "
        type="quantidade"
        value={quantidade}
        dispatch={dispatch}
        inputType="number"
      />
    </Form>
  );
}
