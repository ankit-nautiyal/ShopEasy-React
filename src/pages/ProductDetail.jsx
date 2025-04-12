import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetail.css';
import { toast } from 'react-toastify';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
            const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            
            <div className="details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
                <button onClick={() => {addToCart(product); toast.success(`${product.title} added to cart!`); }}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;