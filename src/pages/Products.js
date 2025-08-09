import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toSlug = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  const getImageSrcCandidates = (productName, category) => {
    const slug = toSlug(productName);
    // All category folders are lowercase under public/images
    const normalizedCategory = (category || '').toLowerCase();
    const dir = normalizedCategory || 'interior';
    const base = `/images/${dir}/${slug}`;
    return [`${base}.jpg`, `${base}.jpeg`, `${base}.png`, `${base}.webp`];
  };

  const handleImageError = (e) => {
    const target = e.target;
    const fallbacks = (target.dataset.fallbacks || '').split('|').filter(Boolean);
    const idx = Number(target.dataset.fallbackIndex || 0);
    if (idx < fallbacks.length) {
      target.dataset.fallbackIndex = String(idx + 1);
      target.src = fallbacks[idx];
    } else {
      // Final fallback placeholder
      target.src = '/images/juction-hardware-stamp.png';
      // Prevent further loops
      target.onerror = null;
    }
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'interior', name: 'Interior Paints' },
    { id: 'exterior', name: 'Exterior Paints' },
    { id: 'metal', name: 'Metal Paints' },
    { id: 'wood', name: 'Wood Paints' },
    { id: 'waterproof', name: 'Waterproofing' }
  ];

  const products = [
    {
      id: 1,
      name: 'ROYALE BLING',
      category: 'interior',
      description:
        'Asian Paints Royale Bling emits a brilliant sparkle, gives an elegant sheen, and a world-class finish to the wall with unmatched stain resistance.',
      image: '',
      features: ['Unmatched sheen', '10 years performance assurance', 'Anti-microbial'],
      inStock: true,
    },
    {
      id: 2,
      name: 'ROYALE HEALTH SHIELD',
      category: 'interior',
      description:
        'Revolutionary indoor paint equipped with Silver Ion Technology that keeps your home environment hygenic.',
      image: '',
      features: [
        'Germ killing action',
        'Neutralizes formaldehyde',
        'Emits fragrance',
        'Best in class finish',
        'Green assure',
      ],
      inStock: true,
    },
    {
      id: 3,
      name: 'ROYALE ASPIRA',
      category: 'interior',
      description:
        'Royale Aspira provides high sheen finish, exceptional crack bridging property, enhanced fire safety and security. It comes with a 5 year performance warranty.',
      image: '',
      features: [
        'Enhanced anti-microbial formula',
        'Unmatched flame spread resistance',
        'Exceptional crack bridging property',
        'Environmentally responsible',
        'Unsurpassed water breading technology',
        'Superior stain resistance',
        '5 year performance warranty',
      ],
      inStock: true,
    },
    {
      id: 4,
      name: 'ROYALE LUXURY EMULSION SHYNE',
      category: 'interior',
      description: 'A high sheen variant of Royale that offers enhanced radiance for your walls',
      image: '',
      features: [
        'Enhanced durability',
        'Smoother finish',
        'Enhanced stain resistance',
        'Anti-fungal shiled',
      ],
      inStock: true,
    },
    {
      id: 5,
      name: 'ROYALE LUXURY EMULSION',
      category: 'interior',
      description:
        'Royale Luxury Emulsion, a tough, durable and soft sheen paint creates the perfect backdrop to your most prized possession.',
      image: '',
      features: ['Excellent flow', 'Stain resistance', 'Anti-fungal properties', 'Soft sheen'],
      inStock: true,
    },
    {
      id: 6,
      name: 'APCOLITE PREMIUM EMULSION',
      category: 'interior',
      description:
        'Asian Paints Premium Emulsion provides a rich and matt finish to the wall with it’s super acrylic quality.',
      image: '',
      features: ['Durable', 'Smooth finish', 'Stain resistant', 'Washable', 'Anti-fungal'],
      inStock: true,
    },
    {
      id: 7,
      name: 'TRACTOR EMULSION ADVANCED',
      category: 'interior',
      description: 'Perfect economy emulsion with upgraded features',
      image: '',
      features: ['Advanced washability', 'Higher durability', 'Better coverage'],
      inStock: true,
    },
    {
      id: 8,
      name: 'TRACTOR EMULSION',
      category: 'interior',
      description:
        'Gives a smooth finish to your walls. A perfect buy if you are using distemper till now.',
      image: '',
      features: ['Durable', 'Smooth', 'Rich finish', 'Value for money product'],
      inStock: true,
    },
    {
      id: 9,
      name: 'TRACTOR ACRYLIC DISTEMPER',
      category: 'interior',
      description: 'Tractor Acrylic Distemper is a water-based interior wall paint.',
      image: '',
      features: [
        'Durability',
        'Shade retention',
        'Fast drying properties',
        'Unparalleled performance',
        'Attractive shades',
      ],
      inStock: true,
    },
    {
      id: 10,
      name: 'TRACTOR UNO ACRYLIC DISTEMPER',
      category: 'interior',
      description: 'Tractor Uno Acrylic Distemper is an economically priced acrylic Distemper.',
      image: '',
      features: ['Smooth matte finish', 'Shade retention'],
      inStock: true,
    },
    {
      id: 11,
      name: 'ROYALE GLITTER',
      category: 'interior',
      description:
        'With a range of golden and silver shades, Royale Glitter will impart sparkle in your interior walls.',
      image: '',
      features: [],
      inStock: true,
    },
    {
      id: 12,
      name: 'ROYALE PLAY METALLIC',
      category: 'interior',
      description:
        'Royale Play Metallics is a water-based special effects textured paint that offers a variety of special effects for interior walls',
      image: '',
      features: [],
      inStock: true,
    },
    {
      id: 13,
      name: 'ROYALE PLAY',
      category: 'interior',
      description:
        'Royale Play is a range of innovative, ready to use special effects finishes that brings life into your favorite interior wall.',
      image: '',
      features: ['Special effects', 'Easy application', 'Sheen'],
      inStock: true,
    },
    {
      id: 14,
      name: 'ROYALE PLAY STUCCO',
      category: 'interior',
      description:
        'Asian Paints Royale Play Stucco is a lime based plaster for interior application which creates a marble like finish with high sheen and smooth finish.',
      image: '',
      features: ['Special effects', 'Marble like effect', 'Easy application', 'Sheen'],
      inStock: true,
    },
    {
      id: 15,
      name: 'ROYALE PLAY BARIQ',
      category: 'interior',
      description:
        'Royale Play Bariq is inspired from saharan deserts which upon application provides a metallic lusture that lends elegance and style to the surface.',
      image: '',
      features: ['Special effects', 'Metallic lusture', 'Easy application'],
      inStock: true,
    },
    {
      id: 16,
      name: 'ROYALE BASECOAT',
      category: 'interior',
      description:
        'Asian Paints Royale Basecoat is a superfinish primer tailored for the Asian Paints Royale Interior emulsion that provides luxurious topcoat finish and 5 years Royale Assurance.',
      image: '',
      features: ['Pashmina topcoat finish', 'Moisture lock technology'],
      inStock: true,
    },
    {
      id: 17,
      name: 'DECOPRIME WALL PRIMER',
      category: 'interior',
      description:
        'Asian Paints Decoprime Wall Primer (Water Thinnable) can be used as a primer for painting of water-based interior wall finishes',
      image: '',
      features: ['Easy brushing', 'Excellent coverage', 'Quick drying'],
      inStock: true,
    },
    {
      id: 18,
      name: 'TRACTOR PRIMER (WT)',
      category: 'interior',
      description:
        'Tractor Primer (Water Thinnable) is a water-based economy wall primer for interior masonry surfaces.',
      image: '',
      features: ['Whiteness', 'Good coverage', 'Good flow', 'Leveling properties'],
      inStock: true,
    },
    {
      id: 19,
      name: 'ULTIMA PROTEK SHYNE',
      category: 'exterior',
      description:
        "Exterior Super Luxury Paint that comes with 10 years of performance warranty. It's UV hybrid technology ensures that your house stays protected and beautiful.",
      image: '',
      features: ['10 years warranty', 'Uv hybrid technology', 'Ultra luxury sheen'],
      inStock: true,
    },
    {
      id: 20,
      name: 'APEX ULTIMA',
      category: 'exterior',
      description: 'High performance exterior wall finish with 7 years peformance warranty',
      image: '',
      features: ['7 year performance warranty'],
      inStock: true,
    },
    {
      id: 21,
      name: 'APEX ULTIMA CLEAR',
      category: 'exterior',
      description:
        'A water-based high performance coating for roof tiles, Chinese bricks and no-porous baked clay tiles.',
      image: '',
      features: [],
      inStock: true,
    },
    {
      id: 22,
      name: 'APEX WEATHERPROOF EMULSION',
      category: 'exterior',
      description:
        'A smooth water-based, modified acrylic, exterior wall finish with silicon additives.',
      image: '',
      features: ['Weather guard', 'Excellent protection against uv attack'],
      inStock: true,
    },
    {
      id: 23,
      name: 'ACE EXTERIOR EMULSION',
      category: 'exterior',
      description:
        'Perfect replacement for cement paints. This paint is a great value for money and proves effective for strong weather conditions.',
      image: '',
      features: ['Perfect replacement of cement paint'],
      inStock: true,
    },
    {
      id: 24,
      name: 'APEX ULTIMA PROTEK TOP COAT',
      category: 'exterior',
      description:
        'High performance exterior Emulsion which comes with 10 years durability warranty that stands against all kinds of weather conditions',
      image: '',
      features: ['10 year warranty', 'Advance dust proof', 'Anti-fungal and anti-algal'],
      inStock: true,
    },
    {
      id: 25,
      name: 'APEX DURACAST PEBBLETEX',
      category: 'exterior',
      description:
        'An acrylic, water-based exterior product specially designed to offer a bubble or headcut pattern through spraying for both exterior and interior wall surfaces.',
      image: '',
      features: ['HIDES FINE CRACKS', 'ANTI-ALGAL FORMULA', 'TOUGH TEXTURED', 'UNIQUE PATTERN'],
      inStock: true,
    },
    {
      id: 26,
      name: 'ULTIMA CREATEX CROSSTEX',
      category: 'exterior',
      description: 'Textures for Exterior Spaces',
      image: '',
      features: ['HIDES FINE CRACKS', 'PLASTER PROTECTION', 'TOUGH TEXTURED', 'WARRANTY'],
      inStock: true,
    },
    {
      id: 27,
      name: 'TRUCARE EXTERIOR WALL PRIMER',
      category: 'exterior',
      description:
        'A water-based undercoat suitable for application on exterior surface below exterior emulsions.',
      image: '',
      features: ['Whiteness', 'Anti chalking'],
      inStock: true,
    },
    {
      id: 28,
      name: 'ULTIMA BASECOAT',
      category: 'exterior',
      description:
        'Asian Paints Ultima Basecoat is a specialized High Performance Luxury Primer designed for the Asian Paints Ultima exterior emulsion that extends the warranty of Ultima Top coat by 2 Years (i.e. 7+2 years)',
      image: '',
      features: ['Prevents cracks upto 1mm', 'Rain guard tecnology', '5x higher water resistance'],
      inStock: true,
    },
    {
      id: 29,
      name: 'APCOLITE PREMIUM GLOSS ENAMEL',
      category: 'metal',
      description:
        'A solvent-based all-surface enamel that imparts a shiny new look to your surfaces and forms a tough, highly washable and stain resistant film.',
      image: '',
      features: ['High gloss', 'High durability', 'Stain guard'],
      inStock: true,
    },
    {
      id: 30,
      name: 'TRACTOR ENAMEL',
      category: 'metal',
      description:
        'An economical choice for your household, this enamel can be used on multiple surfaces - be it wood, metal or masonry surfaces.',
      image: '',
      features: ['Gloss finish', 'Stain guard'],
      inStock: true,
    },
    {
      id: 31,
      name: 'APCOLITE PREMIUM SATIN ENAMEL',
      category: 'metal',
      description:
        'A solvent-based all-surface enamel that offers a finish akin to the soft, rich sheen of a satin fabric.',
      image: '',
      features: ['Soft sheen', 'Stain guard'],
      inStock: true,
    },
    {
      id: 32,
      name: 'MELAMYNE MATT',
      category: 'wood',
      description: 'An acid curing solvent-based 2 pack wood finish.',
      image: '',
      features: ['SUPERIOR STAIN RESISTANCE'],
      inStock: true,
    },
    {
      id: 33,
      name: 'TOUCHWOOD',
      category: 'wood',
      description: 'A single pack polyurethane modified wood finish.',
      image: '',
      features: ['GOOD RESISTANCE'],
      inStock: true,
    },
    {
      id: 34,
      name: 'MELAMYNE GLOSSY',
      category: 'wood',
      description: 'An acid curing solvent based 2 pack wood finish',
      image: '',
      features: ['SUPERIOR STAIN RESISTANCE'],
      inStock: true,
    },
    {
      id: 35,
      name: 'MELAMYNE SEALER',
      category: 'wood',
      description: 'High performance sealer',
      image: '',
      features: ['SUPERIOR DURABILITY'],
      inStock: true,
    },
    {
      id: 36,
      name: 'ASIAN PAINTS WALL PUTTY',
      category: 'waterproof',
      description: 'Wall Putty for smooth finish',
      image: '',
      features: ['Smooth finish', 'Good workability', 'Excellent strength'],
      inStock: true,
    },
    {
      id: 37,
      name: 'SILICON SHIELD SHYNE',
      category: 'waterproof',
      description:
        'Silicon Shield Shyne is one component, ready-to-use silicon based clear coat for brick and stone substrates that provides sheen look and protects substrate from',
      image: '',
      features: ['Silicon based clear coat', 'High sheen', 'Protection against efflorescence'],
      inStock: true,
    },
    {
      id: 38,
      name: 'SMARTCARE SALT CLEAN',
      category: 'waterproof',
      description:
        'SmartCare Salt Clean is a pretreatment chemical for the swift and effective removal of efflorescence from both vertical and horizontal surface.',
      image: '',
      features: ['Heavy duty efflorescence cleaner', 'Pore clean technology', 'Instant action'],
      inStock: true,
    },
    {
      id: 39,
      name: 'SMARTCARE HYDROLOC',
      category: 'waterproof',
      description: 'Pre-putty waterproofing coating against dampness and efflorescence.',
      image: '',
      features: ['3 years warranty', 'Ready to use', 'Anti-dampness and efflorescence'],
      inStock: true,
    },
    {
      id: 40,
      name: 'SMARTCARE DAMP PROOF FIBER TECH',
      category: 'waterproof',
      description: 'Fiber reinforced waterproofing for exterior surfaces',
      image: '',
      features: [
        'Waterproofing warranty',
        'Surface heat reduction',
        'Crack bridging',
        'With fiber',
      ],
      inStock: true,
    },
    {
      id: 41,
      name: 'SMARTCARE DAMP SHEATH INTERIOR',
      category: 'waterproof',
      description: 'Waterproofing primer for interior surfaces',
      image: '',
      features: ['7 times more water resistant', 'Better coverage', 'Better whiteness and sheen'],
      inStock: true,
    },
    {
      id: 42,
      name: 'DAMP PROOF SPARK',
      category: 'waterproof',
      description: 'Waterproofing primer for exterior surfaces',
      image: '',
      features: ['Waterproofing warranty', 'Crack bridging', 'Flexibility'],
      inStock: true,
    },
    {
      id: 43,
      name: 'VITALIA NEO',
      category: 'waterproof',
      description: 'Integral liquid waterproofing coating',
      image: '',
      features: ['Compressive strength', 'Workability', 'Shrinkage'],
      inStock: true,
    },
    {
      id: 44,
      name: 'SMARTCARE DAMP BLOCK 2K',
      category: 'waterproof',
      description: 'Two component acrylic polymer-modified cementitious high performance coating.',
      image: '',
      features: ['Warranty', 'Anti-efflorescence', 'Elongation'],
      inStock: true,
    },
    {
      id: 45,
      name: 'SMARTCARE CRACK SEAL',
      category: 'waterproof',
      description:
        'Ready to use fiber glass reinforced crack filling compound for both interior and exterior surfaces.',
      image: '',
      features: ['Crack filing', 'Waterproofing', 'Flexibility'],
      inStock: true,
    },
    {
      id: 46,
      name: 'SMARTCARE DAMP DEFENSE',
      category: 'waterproof',
      description: 'Tintable waterproofing for exterior and interior surfaces',
      image: '',
      features: ['Waterproofing warranty', 'Tintable coating', 'Dual technology'],
      inStock: true,
    },
    {
      id: 47,
      name: 'SMARTCARE LATEX POWER +',
      category: 'waterproof',
      description: 'Multi purpose latex for waterproofing, bonding and repair',
      image: '',
      features: ['Latex', 'Waterproofing', 'Reduces cracking', 'Mortar modifier'],
      inStock: true,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Removed star rendering as reviews and ratings are no longer displayed

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
                {(() => {
                  const candidates = getImageSrcCandidates(product.name, product.category);
                  return (
                    <img
                      src={product.image || candidates[0]}
                      alt={product.name}
                      data-fallbacks={candidates.slice(1).join('|')}
                      onError={handleImageError}
                    />
                  );
                })()}
                {!product.inStock && (
                  <div className="out-of-stock">Out of Stock</div>
                )}
              </div>
              
              <div className="product-details">
                <div className="product-category">
                  {categories.find(cat => cat.id === product.category)?.name}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-features">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
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