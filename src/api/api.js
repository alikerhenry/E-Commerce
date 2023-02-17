export async function fetchProducts () {
  const response = await (await fetch(`https://dummyjson.com/products`)).json();
  return response;
};

export async function fetchCategory (categoryName) {
  const response = await (await fetch(`https://dummyjson.com/products/category/${categoryName}`)).json();
  return response;
}

export async function fetchProductDetails (productId) {
  const response = await (await fetch(`https://dummyjson.com/products/${productId}`)).json();
  return response;
}
