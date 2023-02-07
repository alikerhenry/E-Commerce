export async function fetchCategory (categoryName) {
  const res = await fetch(`https://dummyjson.com/category/${categoryName}`)
  return res.json()
}

export async function fetchProducts (productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`)
  return res.json()
}
