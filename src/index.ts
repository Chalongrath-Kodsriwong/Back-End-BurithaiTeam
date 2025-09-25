import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Mock API URL
const MOCK_API = "https://68be95bc9c70953d96eccd35.mockapi.io/api/product/E-commerse";

// 🧪 Root test
app.get("/", (req: Request, res: Response) => {
  res.send("Back-End BurithaiTeam is running!");
});

// ✅ [GET] ดึงสินค้าทั้งหมด
app.get("/products", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(MOCK_API);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// ✅ [GET] ดึงสินค้าเฉพาะ id
app.get("/products/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${MOCK_API}/${id}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
