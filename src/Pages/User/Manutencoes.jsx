import { useState } from "react";
import { DarkScreen } from "../../Components/Form";
import Table from "../../Components/Table";

const agendamentos = JSON.parse(localStorage.getItem("agendamentos") || "[]");
const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

export default function ListaManutencoes() {
  const [showDark, setShowDark] = useState(false);

  const [index, setIndex] = useState(null);

  const tableBody = agendamentos
    // .sort((a, b) => a.data.localeCompare(b.data))
    .map((a, i) => {
      const cliente = clientes?.filter((c) => c.placa === a.placa)[0];

      const { mecanico, dataInicio, dataConclusao } = a;

      const Button = (
        <img
          onClick={() => {
            setIndex(i);
            setShowDark(true);
          }}
          width={40}
          className="btn-ordem"
          src="/form.png"
          alt=""
        />
      );

      const data = [
        cliente?.nome,
        cliente?.placa,
        mecanico,
        dataInicio,
        dataConclusao,
        Button,
      ];

      return (
        <tr key={i}>
          {data.map((d, i) => (
            <th key={i}>{d}</th>
          ))}
        </tr>
      );
    });

  const { placa, mecanico, desc, dataInicio, dataConclusao } =
    agendamentos[index] || [];
  const { nome, cpf, modelo, telefone } =
    clientes.find((cl) => cl.placa === placa) || [];

  const ordemServico = (
    <div className="ordem-servico">
      <h3>Ordem de Serviço</h3>
      <section>
        <header>Cliente</header>
        <div className="cliente two">
          <div className="item">
            <strong>Nome: </strong>
            {nome}
          </div>
          <div className="item">
            <strong>CPF: </strong>
            {cpf}
          </div>
          <div className="item">
            <strong>Telefone: </strong>
            {telefone}
          </div>
          <div className="item">
            <strong>Veículo: </strong>
            {modelo}
          </div>
          <div className="item">
            <strong>Placa: </strong>
            {placa}
          </div>
        </div>
      </section>
      <section>
        <header>Mecânico</header>
        <div className="item">
          <strong>Nome: </strong>
          {mecanico}
        </div>
      </section>
      <section>
        <header>Descrição</header>
        <div className="desc">
          <p>{desc}</p>
        </div>
      </section>
      <section>
        <header>Período</header>
        <div className="two">
          <div className="item">
            <strong>Início: </strong>
            {dataInicio}
          </div>
          <div className="item">
            <strong>Fim: </strong>
            {dataConclusao}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="list-container">
      <h3>Agendamentos</h3>
      <Table
        headerArray={[
          "Nome do Cliente",
          "Placa do Carro",
          "Nome do Mecânico",
          "Início da Manutenção",
          "Fim da Manutenção",
          "Ordem de Serviço",
        ]}
        body={tableBody}
      />
      <DarkScreen
        conteudo={ordemServico}
        showDark={showDark}
        setShowDark={setShowDark}
        cancelText="Fechar"
        mainClassName="ordem-servico-container"
      />
    </div>
  );
}
