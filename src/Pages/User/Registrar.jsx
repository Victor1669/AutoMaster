import { useReducer, useRef } from "react";
import Form, { Field } from "../../Components/Form";

const initialState = {
  cliente: {
    nome: "",
    cpf: "",
    telefone: "",
  },
  veiculo: {
    modelo: "",
    placa: "",
  },
};

function reducer(state, action) {
  const { type, payload } = action;

  const { cliente, veiculo } = state;

  switch (type) {
    case "nome":
      return { ...state, cliente: { ...cliente, nome: payload } };
    case "cpf":
      return { ...state, cliente: { ...cliente, cpf: payload } };
    case "telefone":
      return { ...state, cliente: { ...cliente, telefone: payload } };
    case "modelo":
      return { ...state, veiculo: { ...veiculo, modelo: payload } };
    case "placa":
      return { ...state, veiculo: { ...veiculo, placa: payload } };
    case "clear":
      return {
        ...state,
        cliente: {
          nome: "",
          cpf: "",
          telefone: "",
        },
        veiculo: {
          modelo: "",
          placa: "",
        },
      };
    default:
      throw new Error("Ação inválida!");
  }
}

export default function Registrar() {
  const [
    {
      cliente: { nome, cpf, telefone },
      veiculo: { modelo, placa },
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const ipt1 = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const stored = localStorage.getItem("clientes");
    const clientes = stored ? JSON.parse(stored) : [];

    const newCliente = { nome, cpf, telefone, modelo, placa };

    const updatedClientes = [...clientes, newCliente];

    dispatch({ type: "clear" });
    ipt1.current.focus();

    localStorage.setItem("clientes", JSON.stringify(updatedClientes));
  }

  return (
    <Form
      title="Registrar Cliente"
      onSubmit={handleSubmit}
      className="form"
      btnText="Registrar"
      btnClassName="button"
    >
      <fieldset>
        <legend>Cliente</legend>
        <Field
          label="Nome:"
          type="nome"
          value={nome}
          dispatch={dispatch}
          inputRef={ipt1}
        />
        <Field label="CPF:" type="cpf" value={cpf} dispatch={dispatch} />
        <Field
          label="Telefone:"
          type="telefone"
          inputType="tel"
          value={telefone}
          dispatch={dispatch}
        />
      </fieldset>

      <fieldset>
        <legend>Veículo</legend>
        <Field
          type="modelo"
          value={modelo}
          dispatch={dispatch}
          label="Modelo: "
        />
        <Field type="placa" value={placa} dispatch={dispatch} label="Placa: " />
      </fieldset>
    </Form>
  );
}
