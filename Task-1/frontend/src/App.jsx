import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch Products
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  // Add Product
  const addProduct = async () => {
    if (!name || !price) return;

    await axios.post("http://localhost:5000/api/products", {
      name,
      price,
    });

    setName("");
    setPrice("");

    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product App</h1>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addProduct}>Add Product</button>

      <hr />

      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            width: "250px",
          }}
        >
          <h3>{product.name}</h3>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;