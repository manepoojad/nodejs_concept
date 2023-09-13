const db = require("../database/db");

module.exports = class Product {
  constructor(reqObj) {
    this.name = reqObj.name;
    this.description = reqObj.description;
    this.price = reqObj.price;
  }

  async createProduct() {
    const [result] = await db.execute(
      "INSERT INTO products (name, description, price) VALUES (?, ?, ?)",
      [this.name, this.description, this.price]
    );
    return result; // return created Object
  }

  static async retrieveProductList() {
    const [rows] = await db.execute("SELECT * FROM products");
    return rows;
  }

  static async retrieveProductById(reqId) {
    const [rows] = await db.execute(
      `SELECT * FROM products WHERE id = "${reqId}"`
    );
    if (rows.length === 0) {
      throw {
        statusCode: 404,
        error: "Product not found",
      };
    }
    return rows;
  }

  async updateProduct(productId) {
    try {
      const query =
        "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?";
      const [result] = await db.execute(query, [
        this.name,
        this.price,
        this.description,
        productId,
      ]);

      if (result.affectedRows === 0) {
        throw({
          statusCode: 404,
          message: "Something went wrong."
        })
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(productId) {
    try {
      const query = "DELETE FROM products WHERE id = ?";
      const [result] = await db.execute(query, [productId]);
      return result;
    } catch (error) {
      throw error;
    }
  }
};
