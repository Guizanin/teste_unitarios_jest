/**
 * A quantidade vendida pode ser de 1 ou mais unidades
 * -> Se estoque ficar negativo uma exception deve ser lançada
 * -> O valor de venda não pode ser maior que o valor da compra
 * @param {*} product
 * @param {*} amount
 */

export default function sellProduct(product, amount) {
  product.stock -= 1;

  return product;
}
