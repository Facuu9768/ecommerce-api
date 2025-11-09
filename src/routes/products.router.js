import { Router } from "express";
import ProductManager from "../managers/ProductManager.js";

const router = Router();
const productManager = new ProductManager();

router.get("/", async (req, res) => {
  const products = await productManager.getProducts();
  res.json(products);
});

router.get("/:pid", async (req, res) => {
  const id = parseInt(req.params.pid);
  const product = await productManager.getProductById(id);
  if (!product) return res.status(404).json({ error: "Producto no encontrado" });
  res.json(product);
});

router.post("/", async (req, res) => {
  const newProduct = req.body;
  if (!newProduct.title || !newProduct.description || !newProduct.code || !newProduct.price || !newProduct.stock || !newProduct.category) {
    return res.status(400).json({ error: "Campos incompletos" });
  }
  const added = await productManager.addProduct(newProduct);
  res.status(201).json(added);
});

router.put("/:pid", async (req, res) => {
  const id = parseInt(req.params.pid);
  const updated = await productManager.updateProduct(id, req.body);
  if (!updated) return res.status(404).json({ error: "Producto no encontrado" });
  res.json(updated);
});

router.delete("/:pid", async (req, res) => {
  const id = parseInt(req.params.pid);
  await productManager.deleteProduct(id);
  res.json({ message: "Producto eliminado" });
});

export default router;
