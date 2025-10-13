import Table from "../../Components/Table";

const agendamentos = JSON.parse(localStorage.getItem("agendamentos"));
const clientes = JSON.parse(localStorage.getItem("clientes"));

const mainData = agendamentos
  .sort((a, b) => a.data.localeCompare(b.data))
  .map((a, i) => {
    const cliente = clientes.filter((c) => c.placa === a.placa)[0];

    const data = [cliente?.nome, cliente?.placa, a.mecanico, a.data, a.desc];

    return (
      <tr key={i}>
        {data.map((d, i) => (
          <th key={i}>{d}</th>
        ))}
      </tr>
    );
  });

export default function ListaManutencoes() {
  return (
    <div className="list-container">
      <h3>Agendamentos</h3>
      <Table
        headerArray={[
          "Nome do Cliente",
          "Placa do Carro",
          "Nome do Mecânico",
          "Data da Manutenção",
          "Descrição do problema",
        ]}
        body={mainData}
      />
    </div>
  );
}
