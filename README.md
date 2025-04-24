# 🛍️ Click & Get

**Click & Get** is a modern E-commerce product page built with **React** and **Vite**. It allows users to browse products, add them to a cart, and prepare for checkout, all in a clean, responsive single-page application.

---

## ⚙️ Tech Stack

- **Frontend**: React.js (Functional Components + Hooks)
- **Routing**: React Router DOM
- **State Management**: Context API
- **Styling**: Bulma + Custom CSS
- **Data Persistence**: localStorage
- **API**: Dummyson API

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ndevu3399/clickandget
cd clickandget
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
clickandget/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── Cart.jsx
│   │   ├── QuantitySelector.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── Header.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CartPage.jsx
│   │   └── ProductPage.jsx (optional)
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── cartUtils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

---

## ✅ Features

### 🛒 Product Listing
- Displays products with image, name, and price
- Responsive grid layout with Bulma

### 🛍️ Shopping Cart
- Add/remove items from cart
- Increase/decrease quantity
- Cart summary with total price
- Cart persisted in localStorage

### 🔍 Filtering
- Filter products by category (e.g., Electronics, Fashion)

---

## ✨ Styling

We used **Bulma CSS** for rapid UI development, and enhanced the appearance with some custom CSS.

### Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
```

---

## 🌐 Deployment

Live site: [https://clickandget.vercel.app/](https://clickandget.vercel.app/)

---

## 🎯 MVP (Core Deliverables)

- [x] Display a list of products with images and prices
- [x] Add products to the cart
- [x] View cart summary with total
- [x] Enable quantity selection for products
- [x] Filter products by category
- [x] Persist the cart in localStorage for later


## 👥 Contributors

- **Nicholas Mwangi**
- **Lydia Njeri**
- **Collins Nyambury**