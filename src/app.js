
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080 🚀");
});
