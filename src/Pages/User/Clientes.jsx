import { useState } from "react";

import { DarkScreen } from "../../Components/Form";
import Table from "../../Components/Table";

export default function ListaClientes() {
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  const [showRemove, setShowRemove] = useState(false);

  const [index, setIndex] = useState(null);

  const cliente = clientes?.[index];

  function handleRemoveCliente() {
    const updatedArray = clientes.filter((_, i) => i !== index);

    localStorage.setItem("clientes", JSON.stringify(updatedArray));

    setShowRemove(false);
  }

  return (
    <div className="list-container">
      <h3>Clientes</h3>

      <Table
        headerArray={["Nome", "CPF", "Telefone", "Veículo", "Placa", ""]}
        body={clientes.map((c, i) => (
          <Cliente
            key={c.placa}
            index={i}
            functions={{ setShowRemove, setIndex }}
            cliente={c}
          />
        ))}
      />

      <DarkScreen
        mensagem={
          <>
            Certeza de que vai remover <strong>{cliente?.nome}</strong>?
          </>
        }
        onChangeItem={handleRemoveCliente}
        showDark={showRemove}
        setShowDark={setShowRemove}
        cancelText="Cancelar"
        confirmText="Sim"
      />
    </div>
  );
}
function Cliente({
  index,
  functions: { setShowRemove, setIndex },
  cliente: { nome, cpf, telefone, modelo, placa },
}) {
  const Button = (
    <button
      className="remove-button"
      onClick={() => {
        setShowRemove(true);
        setIndex(index);
      }}
    >
      X
    </button>
  );

  const data = [nome, cpf, telefone, modelo, placa, Button];
  return (
    <tr className="cliente">
      {data.map((d, i) => (
        <th key={i}>{d}</th>
      ))}
    </tr>
  );
}
