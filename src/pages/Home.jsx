import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Fetch products
        const fetchProducts = async () => {
            const url = selectedCategory
                ? `https://fakestoreapi.com/products/category/${selectedCategory}`
                : 'https://fakestoreapi.com/products';
            const response = await axios.get(url);
            setProducts(response.data);
        };

        // Fetch categories
        const fetchCategories = async () => {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            setCategories(response.data);
        };

        fetchProducts();
        fetchCategories();
    }, [selectedCategory]);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <h2>Products</h2>
            <div className="filters">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Category</option>

                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}

                </select>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;