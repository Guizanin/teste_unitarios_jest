import Product from "../src/model/product";
import sell from "../src/service/sellProduct";

test("Deve validar baixa estoque da venda de 1 unidade", () => {
  let produto = new Product("Celular", 500.0, 900.0, 10);

  sell(produto, 1);

  expect(produto.stock).toBe(9);
});

test("Deve aceitar a venda de mais de 1 unidade", () => {
  let produto = new Product("Celular", 500.0, 900.0, 10);

  sell(produto, 3);

  expect(produto.stock).toBe(7);
});
