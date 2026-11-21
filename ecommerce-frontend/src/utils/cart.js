import axios from "axios";
export async function addToCart(productId, quantity) {
    await axios.post("/api/cart-items", {
        productId,
        quantity
    });
} 