import { useReducer } from "react";
import Form, { Field } from "../../Components/Form";

const initialState = {
  placa: "",
  mecanico: "",
  dataInicio: "",
  dataConclusao: "",
  desc: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "placa":
      return { ...state, placa: payload };
    case "mecanico":
      return { ...state, mecanico: payload };
    case "dataInicio":
      return { ...state, dataInicio: payload };
    case "dataConclusao":
      return { ...state, dataConclusao: payload };
    case "descricao":
      return { ...state, desc: payload };
    default:
      throw new Error("Ação inválida");
  }
}

export default function Agendar() {
  const [{ placa, mecanico, dataInicio, dataConclusao, desc }, dispatch] =
    useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();

    const stored = localStorage.getItem("agendamentos");

    const agendamentos = stored ? JSON.parse(stored) : [];

    const newManutencao = { placa, mecanico, dataInicio, dataConclusao, desc };

    localStorage.setItem(
      "agendamentos",
      JSON.stringify([...agendamentos, newManutencao])
    );
  }

  return (
    <Form
      title="Agendar Manutenção"
      btnClassName="button"
      className="form agendar"
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
      <fieldset>
        <legend>Manutenção</legend>
        <Field
          label="Início: "
          type="dataInicio"
          value={dataInicio}
          dispatch={dispatch}
          inputType="date"
        />
        <Field
          label="Fim: "
          type="dataConclusao"
          value={dataConclusao}
          dispatch={dispatch}
          inputType="date"
        />
      </fieldset>
      <label>
        <span>Descrição do problema:</span>
        <textarea
          value={desc}
          onChange={(e) =>
            dispatch({ type: "descricao", payload: e.target.value })
          }
        >
          teste
        </textarea>
      </label>
    </Form>
  );
}
