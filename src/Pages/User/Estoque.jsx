import { useState } from "react";

import { DarkScreen } from "../../Components/Form";
import Table from "../../Components/Table";

import useEstoque from "../../Hooks/useEstoque";
import { useEffect } from "react";

export default function Estoque() {
  const [showRemove, setShowRemove] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  const {
    estoque,
    item,
    functions: { clearQuantity, addQuantity, setQuantity },
    index: { setIndex },
    quantidade: { quantidade, setQuantidade },
  } = useEstoque("estoque");

  useEffect(() => {
    if (!showAddItem) {
      setQuantidade(0);
    }
  }, [showAddItem, setQuantidade]);

  return (
    <div className="list-container">
      <h3>Estoque</h3>

      <Table
        headerArray={["Nome", "Tipo", "Quantidade", "Atualizar", "Zerar"]}
        body={estoque.map((p, i) => {
          const { nome, tipo, quantidade } = p;

          const BtnAdd = (
            <button
              onClick={() => {
                setIndex(i);
                setShowAddItem(true);
              }}
              className="add-button"
            >
              <img src="/update.png" alt="" />
            </button>
          );
          const BtnRemove = (
            <button
              disabled={quantidade == 0}
              onClick={() => {
                setIndex(i);
                setShowRemove(true);
              }}
              className="remove-button"
            >
              X
            </button>
          );

          const data = [nome, tipo, quantidade, BtnAdd, BtnRemove];

          return (
            <tr key={i}>
              {data.map((d, i) => (
                <th key={i}>{d}</th>
              ))}
            </tr>
          );
        })}
      />

      <DarkScreen
        mensagem={
          <>
            Quantas unidades de <strong>{item?.nome}</strong> estão disponíveis?
            <input
              type="number"
              className="add-input"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </>
        }
        showDark={showAddItem}
        setShowDark={setShowAddItem}
        onChangeItem={() => {
          addQuantity();
          setShowAddItem(false);
        }}
        onSetItem={() => {
          setQuantity();
          setShowAddItem(false);
        }}
        cancelText="Cancelar"
        confirmText="Adicionar"
        setterText="Definir"
      />
      <DarkScreen
        mensagem={
          <>
            Certeza de que vai não há mais <strong>{item?.nome}</strong>?
          </>
        }
        showDark={showRemove}
        setShowDark={setShowRemove}
        onChangeItem={() => {
          clearQuantity();
          setShowRemove(false);
        }}
        cancelText="Cancelar"
        confirmText="Sim"
      />
    </div>
  );
}
