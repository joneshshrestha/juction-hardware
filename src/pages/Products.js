import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'interior', name: 'Interior Paints' },
    { id: 'exterior', name: 'Exterior Paints' },
    { id: 'premium', name: 'Premium Paints' },
    { id: 'texture', name: 'Texture Paints' },
    { id: 'primers', name: 'Primers & Sealers' }
  ];

  const products = [
    {
      id: 1,
      name: "Asian Paints Ace",
      category: "interior",
      description: "High-quality interior emulsion paint with excellent coverage and durability",
      price: "₹2,500",
      originalPrice: "₹3,000",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      features: ["Washable", "Low VOC", "Anti-bacterial"],
      inStock: true
    },
    {
      id: 2,
      name: "Asian Paints Apex",
      category: "exterior",
      description: "Weather-resistant exterior paint with superior protection against UV rays",
      price: "₹3,200",
      originalPrice: "₹3,800",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      features: ["Weather Resistant", "UV Protection", "Mildew Resistant"],
      inStock: true
    },
    {
      id: 3,
      name: "Asian Paints Royale",
      category: "premium",
      description: "Premium interior paint with luxurious finish and superior washability",
      price: "₹4,500",
      originalPrice: "₹5,200",
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      features: ["Luxury Finish", "Superior Washability", "Stain Resistant"],
      inStock: true
    },
    {
      id: 4,
      name: "Asian Paints Tractor",
      category: "exterior",
      description: "Industrial-grade exterior paint for commercial and residential buildings",
      price: "₹2,800",
      originalPrice: "₹3,300",
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      features: ["Industrial Grade", "High Coverage", "Durable"],
      inStock: true
    },
    {
      id: 5,
      name: "Asian Paints Texture",
      category: "texture",
      description: "Decorative texture paint for creating unique wall finishes",
      price: "₹3,800",
      originalPrice: "₹4,500",
      rating: 4.5,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      features: ["Decorative", "Easy Application", "Customizable"],
      inStock: false
    },
    {
      id: 6,
      name: "Asian Paints Primer",
      category: "primers",
      description: "High-quality primer for better paint adhesion and surface preparation",
      price: "₹1,800",
      originalPrice: "₹2,200",
      rating: 4.7,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      features: ["Better Adhesion", "Surface Preparation", "Seals Porous Surfaces"],
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < Math.floor(rating) ? "#f39c12" : "none"}
        stroke="#f39c12"
      />
    ));
  };

  return (
    <div className="products-page">
      <div className="container">
        {/* Header */}
        <div className="products-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Our Products</h1>
            <p className="section-subtitle">
              Discover our complete range of Asian Paints - from interior to exterior, 
              premium to texture paints. Quality guaranteed with expert support.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="products-filters">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-item card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {!product.inStock && (
                  <div className="out-of-stock">Out of Stock</div>
                )}
                <div className="product-overlay">
                  <button className="quick-view-btn">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="product-details">
                <div className="product-category">
                  {categories.find(cat => cat.id === product.category)?.name}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="rating-text">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="product-features">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <div className="product-pricing">
                  <div className="price-container">
                    <span className="current-price">{product.price}</span>
                    {product.originalPrice !== product.price && (
                      <span className="original-price">{product.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 