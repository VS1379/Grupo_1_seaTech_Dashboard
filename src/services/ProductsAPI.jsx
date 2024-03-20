export const ProductsAPI = {
  async get() {
    try {
      const response = await fetch("http://localhost:3000/products/api");
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  async getById(id) {
    try {
      const response = await fetch(
        `http://localhost:3000/products/api/detail/${id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};
