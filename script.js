/* ===== SOLEHUB — Vanilla JS E-Commerce ===== */

// ---------- Product Data ----------
const products = [
  {
    id: 1,
    name: "Air Runner X",
    brand: "SOLEHUB",
    category: "Running",
    gender: "Men",
    price: 4999,
    originalPrice: 6999,
    rating: 4.5,
    sizes: [7, 8, 9, 10, 11],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    description: "Lightweight running shoes engineered for speed and comfort. Breathable mesh upper with responsive cushioning for everyday runs and training.",
    isNew: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Street Pro",
    brand: "SOLEHUB",
    category: "Sneakers",
    gender: "Men",
    price: 3499,
    originalPrice: 4499,
    rating: 4.3,
    sizes: [6, 7, 8, 9, 10],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    description: "Urban street-style sneakers with premium leather overlays and a durable rubber outsole. Perfect for casual everyday wear.",
    isNew: false,
    isBestSeller: true
  },
  {
    id: 3,
    name: "Velocity Max",
    brand: "SOLEHUB",
    category: "Sports",
    gender: "Men",
    price: 5999,
    originalPrice: 7999,
    rating: 4.7,
    sizes: [8, 9, 10, 11],
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
    description: "High-performance sports shoes designed for multi-sport activities. Superior grip and ankle support for intense sessions.",
    isNew: true,
    isBestSeller: false
  },
  {
    id: 4,
    name: "Urban Classic",
    brand: "SOLEHUB",
    category: "Casual",
    gender: "Women",
    price: 2799,
    originalPrice: 3499,
    rating: 4.2,
    sizes: [6, 7, 8, 9],
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
    description: "Timeless casual sneakers with a clean silhouette. Soft lining and cushioned footbed for all-day comfort.",
    isNew: false,
    isBestSeller: true
  },
  {
    id: 5,
    name: "Sprint Elite",
    brand: "SOLEHUB",
    category: "Running",
    gender: "Women",
    price: 4499,
    originalPrice: 5499,
    rating: 4.6,
    sizes: [6, 7, 8, 9, 10],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
    description: "Elite sprint shoes built for competitive runners. Carbon-fiber plate and energy-return foam for explosive speed.",
    isNew: true,
    isBestSeller: false
  },
  {
    id: 6,
    name: "Cloud Walk",
    brand: "SOLEHUB",
    category: "Casual",
    gender: "Women",
    price: 1999,
    originalPrice: 2999,
    rating: 4.0,
    sizes: [6, 7, 8, 9],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
    description: "Ultra-soft cloud-like comfort for daily walks. Memory foam insole and flexible outsole for natural movement.",
    isNew: false,
    isBestSeller: false
  },
  {
    id: 7,
    name: "Flex Runner",
    brand: "SOLEHUB",
    category: "Running",
    gender: "Men",
    price: 3799,
    originalPrice: 4799,
    rating: 4.4,
    sizes: [7, 8, 9, 10, 11],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    description: "Flexible running shoes that move with your feet. Knit upper and adaptive midsole for a sock-like fit.",
    isNew: false,
    isBestSeller: true
  },
  {
    id: 8,
    name: "Court Master",
    brand: "SOLEHUB",
    category: "Sports",
    gender: "Men",
    price: 4299,
    originalPrice: 5299,
    rating: 4.5,
    sizes: [8, 9, 10, 11],
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80",
    description: "Court-ready shoes with lateral stability and cushioned heel. Ideal for tennis, badminton, and indoor sports.",
    isNew: true,
    isBestSeller: false
  },
  {
    id: 9,
    name: "Trail Force",
    brand: "SOLEHUB",
    category: "Boots",
    gender: "Men",
    price: 6499,
    originalPrice: 8499,
    rating: 4.8,
    sizes: [8, 9, 10, 11],
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&q=80",
    description: "Rugged trail boots built for adventure. Waterproof membrane, aggressive tread, and reinforced toe protection.",
    isNew: false,
    isBestSeller: true
  },
  {
    id: 10,
    name: "Street Flex",
    brand: "SOLEHUB",
    category: "Sneakers",
    gender: "Women",
    price: 3299,
    originalPrice: 4299,
    rating: 4.1,
    sizes: [6, 7, 8, 9],
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
    description: "Flexible street sneakers with bold colorways. Lightweight construction and textured sole for urban exploration.",
    isNew: true,
    isBestSeller: false
  },
  {
    id: 11,
    name: "Air Motion",
    brand: "SOLEHUB",
    category: "Sneakers",
    gender: "Kids",
    price: 2499,
    originalPrice: 3299,
    rating: 4.3,
    sizes: [6, 7, 8],
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&q=80",
    description: "Fun and flexible sneakers for active kids. Easy-on design with durable materials that withstand playtime.",
    isNew: true,
    isBestSeller: false
  },
  {
    id: 12,
    name: "Pro Runner",
    brand: "SOLEHUB",
    category: "Running",
    gender: "Women",
    price: 5499,
    originalPrice: 6999,
    rating: 4.7,
    sizes: [6, 7, 8, 9, 10],
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
    description: "Professional-grade running shoes with advanced cushioning technology. Designed for long-distance comfort and performance.",
    isNew: false,
    isBestSeller: true
  },
  {
    id: 13,
    name: "Sand Dune",
    brand: "SOLEHUB",
    category: "Sandals",
    gender: "Men",
    price: 1499,
    originalPrice: 1999,
    rating: 4.0,
    sizes: [7, 8, 9, 10, 11],
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
    description: "Comfortable summer sandals with contoured footbed and adjustable straps. Perfect for beach days and casual outings.",
    isNew: false,
    isBestSeller: false
  },
  {
    id: 14,
    name: "Breeze Walk",
    brand: "SOLEHUB",
    category: "Sandals",
    gender: "Women",
    price: 1299,
    originalPrice: 1799,
    rating: 4.2,
    sizes: [6, 7, 8, 9],
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
    description: "Lightweight women's sandals with soft straps and anti-slip sole. Ideal for warm weather comfort.",
    isNew: true,
    isBestSeller: false
  },
  {
    id: 15,
    name: "Kids Sprint",
    brand: "SOLEHUB",
    category: "Sports",
    gender: "Kids",
    price: 1899,
    originalPrice: 2499,
    rating: 4.4,
    sizes: [6, 7, 8],
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&q=80",
    description: "Sporty kids shoes for school and play. Breathable materials and secure fit for growing feet.",
    isNew: false,
    isBestSeller: true
  }
];

// ---------- State ----------
let cart = JSON.parse(localStorage.getItem("solehub_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("solehub_wishlist")) || [];
let currentFilters = {
  category: "All",
  price: "All",
  size: "All",
  sort: "featured",
  search: "",
  gender: null,
  sale: false
};
let selectedSize = null;
let selectedQty = 1;
let currentQuickViewId = null;

// ---------- Helpers ----------
function formatPrice(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function getDiscount(p) {
  return Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = "";
  for (let i = 0; i < full; i++) s += "★";
  if (half) s += "½";
  while (s.replace("½", "").length < 5) s += "☆";
  return s;
}

function showToast(msg, type = "") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function saveCart() {
  localStorage.setItem("solehub_cart", JSON.stringify(cart));
  updateCartCount();
}

function saveWishlist() {
  localStorage.setItem("solehub_wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-count").textContent = count;
}

function updateWishlistCount() {
  document.getElementById("wishlist-count").textContent = wishlist.length;
}

function isInWishlist(id) {
  return wishlist.some((w) => w.id === id);
}

// ---------- Render Products ----------
function createProductCard(p) {
  const discount = getDiscount(p);
  const wishlisted = isInWishlist(p.id);
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ""}
        <div class="product-actions">
          <button class="action-btn ${wishlisted ? "wishlisted" : ""}" onclick="toggleWishlist(${p.id})" title="Wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${wishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="action-btn" onclick="openQuickView(${p.id})" title="Quick View">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${generateStars(p.rating)}</span>
          <span class="rating-num">${p.rating}</span>
        </div>
        <div class="product-price">
          <span class="price-current">${formatPrice(p.price)}</span>
          ${p.originalPrice > p.price ? `<span class="price-original">${formatPrice(p.originalPrice)}</span>` : ""}
        </div>
        <button class="add-cart-btn" onclick="quickAddToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `;
}

function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  const noProducts = document.getElementById("no-products");
  if (!list.length) {
    container.innerHTML = "";
    if (noProducts && containerId === "product-grid") noProducts.style.display = "block";
    return;
  }
  if (noProducts && containerId === "product-grid") noProducts.style.display = "none";
  container.innerHTML = list.map(createProductCard).join("");
}

// ---------- Filtering & Sorting ----------
function getFilteredProducts() {
  let result = [...products];

  // Search
  if (currentFilters.search) {
    const q = currentFilters.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.gender.toLowerCase().includes(q)
    );
  }

  // Gender (from nav)
  if (currentFilters.gender) {
    result = result.filter((p) => p.gender === currentFilters.gender);
  }

  // Sale
  if (currentFilters.sale) {
    result = result.filter((p) => p.originalPrice > p.price);
  }

  // Category
  if (currentFilters.category !== "All") {
    result = result.filter((p) => p.category === currentFilters.category);
  }

  // Price
  if (currentFilters.price !== "All") {
    result = result.filter((p) => {
      switch (currentFilters.price) {
        case "under2000": return p.price < 2000;
        case "2000-4000": return p.price >= 2000 && p.price <= 4000;
        case "4000-6000": return p.price >= 4000 && p.price <= 6000;
        case "above6000": return p.price > 6000;
        default: return true;
      }
    });
  }

  // Size
  if (currentFilters.size !== "All") {
    const size = parseInt(currentFilters.size);
    result = result.filter((p) => p.sizes.includes(size));
  }

  // Sort
  switch (currentFilters.sort) {
    case "price-low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    default:
      // featured — keep original order
      break;
  }

  return result;
}

function applyFilters() {
  currentFilters.category = document.getElementById("filter-category").value;
  currentFilters.price = document.getElementById("filter-price").value;
  currentFilters.size = document.getElementById("filter-size").value;
  currentFilters.sort = document.getElementById("filter-sort").value;
  renderProducts(getFilteredProducts(), "product-grid");
}

function filterByGender(gender) {
  currentFilters.gender = gender;
  currentFilters.sale = false;
  currentFilters.search = "";
  document.getElementById("search-input").value = "";
  document.getElementById("filter-category").value = "All";
  document.getElementById("filter-price").value = "All";
  document.getElementById("filter-size").value = "All";
  document.getElementById("filter-sort").value = "featured";
  currentFilters.category = "All";
  currentFilters.price = "All";
  currentFilters.size = "All";
  currentFilters.sort = "featured";
  renderProducts(getFilteredProducts(), "product-grid");
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  closeMobileMenu();
}

function filterByCategory(cat) {
  currentFilters.category = cat;
  currentFilters.gender = null;
  currentFilters.sale = false;
  document.getElementById("filter-category").value = cat;
  renderProducts(getFilteredProducts(), "product-grid");
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// ---------- Search ----------
function handleSearch() {
  currentFilters.search = document.getElementById("search-input").value.trim();
  currentFilters.gender = null;
  currentFilters.sale = false;
  renderProducts(getFilteredProducts(), "product-grid");
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// ---------- Quick View ----------
function openQuickView(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  currentQuickViewId = id;
  selectedSize = null;
  selectedQty = 1;
  const discount = getDiscount(p);

  document.getElementById("quickview-content").innerHTML = `
    <div class="qv-grid">
      <div class="qv-image">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="qv-details">
        <div class="qv-brand">${p.brand}</div>
        <h2 class="qv-name">${p.name}</h2>
        <div class="qv-rating">
          <span class="stars">${generateStars(p.rating)}</span>
          <span class="rating-num">${p.rating} Rating</span>
        </div>
        <div class="qv-price">
          <span class="current">${formatPrice(p.price)}</span>
          ${p.originalPrice > p.price ? `<span class="original">${formatPrice(p.originalPrice)}</span>` : ""}
          ${discount > 0 ? `<span class="discount">${discount}% OFF</span>` : ""}
        </div>
        <p class="qv-desc">${p.description}</p>
        <div class="qv-sizes">
          <label>Select Size</label>
          <div class="size-options">
            ${p.sizes.map((s) => `<button class="size-btn" data-size="${s}" onclick="selectSize(${s})">${s}</button>`).join("")}
          </div>
        </div>
        <div class="qv-qty">
          <label>Quantity</label>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <span class="qty-val" id="qv-qty">${selectedQty}</span>
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
        </div>
        <div class="qv-actions">
          <button class="btn btn-primary" onclick="addToCartFromQV()">Add to Cart</button>
          <button class="btn btn-outline" onclick="buyNow()">Buy Now</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("quickview-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  document.getElementById("quickview-modal").classList.remove("open");
  document.body.style.overflow = "";
  currentQuickViewId = null;
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.classList.toggle("selected", parseInt(btn.dataset.size) === size);
  });
}

function changeQty(delta) {
  selectedQty = Math.max(1, Math.min(10, selectedQty + delta));
  const el = document.getElementById("qv-qty");
  if (el) el.textContent = selectedQty;
}

function addToCartFromQV() {
  if (!selectedSize) {
    showToast("Please select a size", "error");
    return;
  }
  addToCart(currentQuickViewId, selectedSize, selectedQty);
  closeQuickView();
}

function buyNow() {
  if (!selectedSize) {
    showToast("Please select a size", "error");
    return;
  }
  addToCart(currentQuickViewId, selectedSize, selectedQty);
  closeQuickView();
  openCart();
}

function quickAddToCart(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  // Default to first available size
  addToCart(id, p.sizes[0], 1);
}

// ---------- Cart ----------
function addToCart(id, size, qty) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const existing = cart.find((c) => c.id === id && c.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      brand: p.brand,
      price: p.price,
      originalPrice: p.originalPrice,
      image: p.image,
      size: size,
      qty: qty
    });
  }
  saveCart();
  showToast(`${p.name} added to cart`, "success");
}

function removeFromCart(id, size) {
  cart = cart.filter((c) => !(c.id === id && c.size === size));
  saveCart();
  renderCart();
  showToast("Item removed from cart");
}

function updateCartQty(id, size, delta) {
  const item = cart.find((c) => c.id === id && c.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id, size);
    return;
  }
  saveCart();
  renderCart();
}

function getCartTotals() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const originalTotal = cart.reduce((s, i) => s + i.originalPrice * i.qty, 0);
  const discount = originalTotal - subtotal;
  const delivery = subtotal >= 2000 || subtotal === 0 ? 0 : 99;
  const total = subtotal + delivery;
  return { subtotal, discount, delivery, total };
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const summary = document.getElementById("cart-summary");

  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <p>Your cart is empty</p>
        <button class="btn btn-primary btn-sm" onclick="closeCart(); document.getElementById('products').scrollIntoView({behavior:'smooth'})">Shop Now</button>
      </div>
    `;
    summary.innerHTML = "";
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">Size: ${item.size}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-actions">
          <div class="cart-qty">
            <button onclick="updateCartQty(${item.id}, ${item.size}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${item.id}, ${item.size}, 1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${item.id}, ${item.size})">Remove</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  const t = getCartTotals();
  summary.innerHTML = `
    <div class="cart-summary-row"><span>Subtotal</span><span>${formatPrice(t.subtotal)}</span></div>
    <div class="cart-summary-row"><span>Discount</span><span class="discount-val">-${formatPrice(t.discount)}</span></div>
    <div class="cart-summary-row"><span>Delivery</span><span>${t.delivery === 0 ? "FREE" : formatPrice(t.delivery)}</span></div>
    <div class="cart-summary-row total"><span>Total</span><span>${formatPrice(t.total)}</span></div>
    <button class="checkout-btn" onclick="openCheckout()">Proceed to Checkout</button>
  `;
}

function openCart() {
  renderCart();
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ---------- Wishlist ----------
function toggleWishlist(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const idx = wishlist.findIndex((w) => w.id === id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("Removed from wishlist");
  } else {
    wishlist.push({
      id: p.id,
      name: p.name,
      brand: p.brand,
      price: p.price,
      originalPrice: p.originalPrice,
      image: p.image
    });
    showToast("Added to wishlist", "success");
  }
  saveWishlist();
  // Re-render current product grids to update heart icons
  renderProducts(getFilteredProducts(), "product-grid");
  renderProducts(products.filter((p) => p.isNew), "new-arrivals-grid");
  renderProducts(products.filter((p) => p.isBestSeller), "best-sellers-grid");
  renderWishlist();
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter((w) => w.id !== id);
  saveWishlist();
  renderWishlist();
  renderProducts(getFilteredProducts(), "product-grid");
  showToast("Removed from wishlist");
}

function renderWishlist() {
  const container = document.getElementById("wishlist-items");
  if (!wishlist.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <p>Your wishlist is empty</p>
      </div>
    `;
    return;
  }
  container.innerHTML = wishlist
    .map(
      (item) => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${item.name}</div>
        <div class="wishlist-item-price">${formatPrice(item.price)}</div>
        <div class="wishlist-item-actions">
          <button class="btn btn-primary btn-sm" onclick="quickAddToCart(${item.id}); closeWishlist();">Add to Cart</button>
          <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

function openWishlist() {
  renderWishlist();
  document.getElementById("wishlist-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeWishlist() {
  document.getElementById("wishlist-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ---------- Checkout ----------
function openCheckout() {
  if (!cart.length) {
    showToast("Your cart is empty", "error");
    return;
  }
  closeCart();
  document.getElementById("checkout-form").style.display = "block";
  document.getElementById("order-success").style.display = "none";
  document.getElementById("checkout-form").reset();
  clearCheckoutErrors();
  document.getElementById("checkout-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  document.getElementById("checkout-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function clearCheckoutErrors() {
  document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));
  document.querySelectorAll(".form-group input, .form-group textarea").forEach((el) => el.classList.remove("error"));
}

function validateCheckout() {
  clearCheckoutErrors();
  let valid = true;
  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const pincode = document.getElementById("pincode").value.trim();
  const payment = document.querySelector('input[name="payment"]:checked');

  if (!name || name.length < 2) {
    document.getElementById("err-fullName").textContent = "Please enter your full name";
    document.getElementById("full-name").classList.add("error");
    valid = false;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("err-email").textContent = "Please enter a valid email";
    document.getElementById("email").classList.add("error");
    valid = false;
  }
  if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById("err-phone").textContent = "Enter a valid 10-digit phone number";
    document.getElementById("phone").classList.add("error");
    valid = false;
  }
  if (!address || address.length < 5) {
    document.getElementById("err-address").textContent = "Please enter your address";
    document.getElementById("address").classList.add("error");
    valid = false;
  }
  if (!city) {
    document.getElementById("err-city").textContent = "Please enter city";
    document.getElementById("city").classList.add("error");
    valid = false;
  }
  if (!state) {
    document.getElementById("err-state").textContent = "Please enter state";
    document.getElementById("state").classList.add("error");
    valid = false;
  }
  if (!pincode || !/^\d{6}$/.test(pincode)) {
    document.getElementById("err-pincode").textContent = "Enter a valid 6-digit pincode";
    document.getElementById("pincode").classList.add("error");
    valid = false;
  }
  if (!payment) {
    document.getElementById("err-payment").textContent = "Select a payment method";
    valid = false;
  }
  return valid;
}

function handleCheckout(e) {
  e.preventDefault();
  if (!validateCheckout()) return;

  // Generate order ID
  const orderId = "SH" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 90 + 10);

  // Clear cart
  cart = [];
  saveCart();
  renderCart();

  // Show success
  document.getElementById("checkout-form").style.display = "none";
  document.getElementById("order-success").style.display = "block";
  document.getElementById("order-id").textContent = orderId;
  showToast("Order placed successfully!", "success");
}

// ---------- Newsletter ----------
function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById("newsletter-email").value.trim();
  const errEl = document.getElementById("newsletter-error");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = "Please enter a valid email address";
    return;
  }
  errEl.textContent = "";
  document.getElementById("newsletter-email").value = "";
  showToast("Subscribed successfully! Check your inbox for 10% off.", "success");
}

// ---------- Mobile Menu ----------
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const ham = document.getElementById("hamburger");
  menu.classList.toggle("open");
  ham.classList.toggle("active");
}

function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
  document.getElementById("hamburger").classList.remove("active");
}

// ---------- Search Toggle ----------
function toggleSearch() {
  const bar = document.getElementById("search-bar");
  bar.classList.toggle("open");
  if (bar.classList.contains("open")) {
    document.getElementById("search-input").focus();
  }
}

function closeSearch() {
  document.getElementById("search-bar").classList.remove("open");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- Event Listeners ----------
document.addEventListener("DOMContentLoaded", () => {
  // Initial renders
  renderProducts(getFilteredProducts(), "product-grid");
  renderProducts(products.filter((p) => p.isNew), "new-arrivals-grid");
  renderProducts(products.filter((p) => p.isBestSeller), "best-sellers-grid");
  updateCartCount();
  updateWishlistCount();

  // Filters
  ["filter-category", "filter-price", "filter-size", "filter-sort"].forEach((id) => {
    document.getElementById(id).addEventListener("change", applyFilters);
  });

  // Search
  document.getElementById("search-toggle").addEventListener("click", toggleSearch);
  document.getElementById("search-close").addEventListener("click", closeSearch);
  document.getElementById("search-input").addEventListener("input", () => {
    handleSearch();
  });
  document.getElementById("search-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
      closeSearch();
    }
  });

  // Cart & Wishlist toggles
  document.getElementById("cart-toggle").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("cart-overlay")) closeCart();
  });

  document.getElementById("wishlist-toggle").addEventListener("click", openWishlist);
  document.getElementById("wishlist-close").addEventListener("click", closeWishlist);
  document.getElementById("wishlist-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("wishlist-overlay")) closeWishlist();
  });

  // Quick view
  document.getElementById("quickview-close").addEventListener("click", closeQuickView);
  document.getElementById("quickview-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("quickview-modal")) closeQuickView();
  });

  // Checkout
  document.getElementById("checkout-close").addEventListener("click", closeCheckout);
  document.getElementById("checkout-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("checkout-modal")) closeCheckout();
  });
  document.getElementById("checkout-form").addEventListener("submit", handleCheckout);

  // Newsletter
  document.getElementById("newsletter-form").addEventListener("submit", handleNewsletter);

  // Mobile menu
  document.getElementById("hamburger").addEventListener("click", toggleMobileMenu);

  // Category cards
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      filterByCategory(card.dataset.category);
    });
  });

  // Nav links with data-filter
  document.querySelectorAll("[data-filter-cat]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      filterByGender(el.dataset.filterCat);
      closeMobileMenu();
    });
  });

  document.querySelectorAll("[data-filter-sale]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      currentFilters.sale = true;
      currentFilters.gender = null;
      currentFilters.category = "All";
      document.getElementById("filter-category").value = "All";
      renderProducts(getFilteredProducts(), "product-grid");
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        closeMobileMenu();
      }
    });
  });

  // Close modals on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickView();
      closeCart();
      closeWishlist();
      closeCheckout();
      closeSearch();
      closeMobileMenu();
    }
  });

  // Navbar active state on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 100;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${id}"]`);
        if (active) active.classList.add("active");
      }
    });
  });
});