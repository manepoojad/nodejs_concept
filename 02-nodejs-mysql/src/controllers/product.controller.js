const Product = require("../services/product.service");

exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const reqObj = { name, description, price };

    const productObj = new Product(reqObj);
    const resObj = await productObj.createProduct();

    await res.status(200).send({
      data: resObj,
      message: "Project Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.retrieveProductList = async (req, res, next) => {
  try {
    const data = await Product.retrieveProductList();
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

exports.retrieveProductById = async (req, res, next) => {
  try {
    let reqId = req.params.id;
    const data = await Product.retrieveProductById(reqId);
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await Product.deleteProduct(productId);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.status(204).json({ message: "Product deleted successfully" }); // Successful deletion, no content response
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, price } = req.body; // Assuming the request body contains updated data
    const reqObj = { name, description, price };
    const productObj = new Product(reqObj);
    await productObj.updateProduct(productId);
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
