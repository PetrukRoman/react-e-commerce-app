export const getAllProducts = async ({ signal, viewSetting }) => {
  const url = `http://localhost:3000/products?limit=${viewSetting.itemsPerPage}&page=${viewSetting.currentPage}&sortBy=${viewSetting.sortBy}`;
  const responce = await fetch(url, {
    signal,
  });

  if (!responce.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = responce.status;
    error.info = await responce.json();
  }

  const data = await responce.json();

  return data;
};

export const getAllProductById = async ({ productId, signal }) => {
  const responce = await fetch("http://localhost:3000/products/:" + productId, {
    signal,
  });

  if (!responce.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = responce.status;
    error.info = await responce.json();
  }

  const data = await responce.json();

  return data;
};
