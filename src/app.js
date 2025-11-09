// Importamos express
import express from "express";

// Creamos la app
const app = express();

// Middleware para que el servidor pueda entender JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importamos las rutas (todavía no las usamos, pero ya las vamos a conectar)
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

// Usamos las rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

// Iniciamos el servidor en el puerto 8080
app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080 🚀");
});
