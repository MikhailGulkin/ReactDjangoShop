export const defineProductIdFunc = (productId: string | undefined) =>
  productId ? parseInt(productId) : -1;
