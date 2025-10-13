import { useReducer } from "react";
import Form, { Field } from "../../Components/Form";

const initialState = {
  placa: "",
  mecanico: "",
  data: "",
  desc: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "placa":
      return { ...state, placa: payload };
    case "mecanico":
      return { ...state, mecanico: payload };
    case "data":
      return { ...state, data: payload };
    case "descricao":
      return { ...state, desc: payload };
    default:
      throw new Error("Ação inválida");
  }
}

export default function Agendar() {
  const [{ placa, mecanico, data, desc }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleSubmit(e) {
    e.preventDefault();

    const stored = localStorage.getItem("agendamentos");

    const agendamentos = stored ? JSON.parse(stored) : [];

    const newManutencao = { placa, mecanico, data, desc };

    localStorage.setItem(
      "agendamentos",
      JSON.stringify([...agendamentos, newManutencao])
    );

    console.log();
  }

  return (
    <Form
      title="Agendar Manutenção"
      btnClassName="button"
      className="form"
      btnText="Agendar"
      onSubmit={handleSubmit}
    >
      <Field
        label="Placa do veículo: "
        type="placa"
        value={placa}
        dispatch={dispatch}
      />
      <Field
        label="Mecânico responsável: "
        type="mecanico"
        value={mecanico}
        dispatch={dispatch}
      />
      <Field
        label="Data da manutenção: "
        type="data"
        value={data}
        dispatch={dispatch}
        inputType="date"
      />
      <Field
        label="Descrição do problema: "
        type="descricao"
        value={desc}
        dispatch={dispatch}
      />
    </Form>
  );
}
