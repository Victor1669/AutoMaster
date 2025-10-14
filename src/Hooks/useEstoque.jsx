import { useState } from "react";

export default function useEstoque(localName) {
  const estoque = JSON.parse(localStorage.getItem(localName) || "[]");

  const [index, setIndex] = useState(null);
  const item = estoque[index];

  const [quantidade, setQuantidade] = useState(0);

  function clearQuantity() {
    item.quantidade = 0;

    localStorage.setItem(localName, JSON.stringify(estoque));
  }

  function addQuantity() {
    const itemQuantidade = Number(item.quantidade);

    item.quantidade = itemQuantidade + Number(quantidade);

    localStorage.setItem(localName, JSON.stringify(estoque));
  }

  function setQuantity() {
    item.quantidade = quantidade;

    localStorage.setItem(localName, JSON.stringify(estoque));
  }

  return {
    estoque,
    item,
    functions: { clearQuantity, addQuantity, setQuantity },
    index: { index, setIndex },
    quantidade: { quantidade, setQuantidade },
  };
}
