# ⚙️ CRUDS Management System

A simple yet powerful CRUD (Create, Read, Update, Delete) web application built with React.js and JSON Server.
It allows users to manage records efficiently with a clean, modern interface — perfect for learning and small-scale admin dashboards.

## 🚀 Features

### 🧩 Core Functionalities

- **Create**: Add new records dynamically through an interactive form

- **Read**: View and filter existing records from the mock backend

- **Update**: Edit existing data in real-time using modal forms

- **Delete**: Remove records with confirmation prompts

### 💻 Front-End Features

- **Built with React.js (Vite)** for fast rendering and modular structure

-**React Hooks** for state management (useState, useEffect)

- **Reusable Components** for tables, forms, and alerts

- **Bootstrap 5** for responsive layout

- **Fully client-side** — no real backend required

### 🎨 User Interface

- **Responsive Design**: Works seamlessly on desktop and mobile

- **Clean Layout**: Minimal and easy to navigate

## 🛠️ Technology Stack

### Frontend

- **React 19.1.1** - Modern React with latest features
- **Redux Toolkit** - State management for cart, user, and products
- **React Router DOM** - Client-side routing
- **Bootstrap 5.3.8** - Responsive UI framework
- **React Bootstrap** - Bootstrap components for React
- **Styled Components** - CSS-in-JS styling
- **Axios** - HTTP client for API calls
- **Vite** - Fast build tool and development server

### Backend

- **JSON Server** - RESTful API server for mock backend
 

## 📁 Project Structure

```
e-commerce-1/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── CardProduct.jsx
│   │   │   ├── CarouselItemCom.jsx
│   │   │   ├── CartCom.jsx
│   │   │   ├── DetailsProductSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FormAuth.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── OrderShipped.jsx
│   │   │   └── OurProducts.jsx
│   │   ├── custom/          # Custom components and utilities
│   │   │   ├── Api/         # API service files
│   │   │   └── MainButton.jsx
│   │   ├── layout/          # Layout components
│   │   │   ├── MainLayout.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── PublicRoute.jsx
│   │   │   └── SharedLayout.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── BuyNowSuccess.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Favorites.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   └── Register.jsx
│   │   ├── store/           # Redux store and slices
│   │   │   ├── index.js
│   │   │   └── slices/
│   │   │       ├── carouselSlice.js
│   │   │       ├── cartSlice.js
│   │   │       ├── favSlice.js
│   │   │       ├── productSlice.js
│   │   │       └── userSlice.js
│   │   └── main.jsx         # Application entry point
│   ├── public/              # Static assets
│   ├── package.json
│   └── vite.config.js
├── backend/                  # JSON Server mock backend
│   ├── data.json            # JSON database
│   ├── public/              # Static assets
│   │   └── assets/          # Product images
│   ├── package.json
│   └── node_modules/
├── screenshots/              # Application screenshots
│   ├── home.png
│   ├── login.png
│   ├── register.png
│   ├── cart.png
│   └── favourites.png
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mariam433477/e-commerce
   cd e-commerce
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the JSON Server**

   ```bash
   cd backend
   npm start
   ```

   The JSON server will run on `http://localhost:3005`

2. **Start the Frontend Development Server**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend application will run on `http://localhost:5173`

3. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`

## 📸 Screenshots

### 🏠 Home Page

![Home Page](screenshots/home.png)
_Main landing page with product carousel and featured products_

### 🔐 Authentication

![Login Page](screenshots/login.png)
_User login interface with form validation_

![Register Page](screenshots/register.png)
_User registration form with input validation_

### 🛒 Shopping Features

![Shopping Cart](screenshots/cart.png)
_Shopping cart with item management and quantity controls_

![Favorites](screenshots/favourites.png)
_User favorites page with saved products_

![Product Details](screenshots/product-detials.png)
_Detailed product view with specifications and add to cart functionality_

## 📊 API Endpoints

The JSON Server provides the following RESTful API endpoints:

### Users

- `GET /users` - Get all users
- `POST /users` - Create new user
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Carousel

- `GET /carousel` - Get all carousel slides
- `POST /carousel` - Create new slide
- `GET /carousel/:id` - Get slide by ID
- `PUT /carousel/:id` - Update slide
- `DELETE /carousel/:id` - Delete slide

## 🎯 Key Features Implementation

### State Management

- **Redux Toolkit** for centralized state management
- **User Slice**: Handles authentication and user data
- **Cart Slice**: Manages shopping cart with localStorage persistence
- **Product Slice**: Manages product data and filtering
- **Favorites Slice**: Handles user favorites
- **Carousel Slice**: Manages homepage carousel data

### Routing

- **Protected Routes**: Authentication-required pages
- **Public Routes**: Accessible to all users
- **Dynamic Routing**: Product details with ID parameters

### Data Persistence

- **localStorage**: User sessions, cart data, and favorites
- **JSON Server**: Backend data storage
- **User-specific Data**: Separate cart and favorites per user

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Bootstrap Components**: Consistent styling and layout
- **Interactive Elements**: Hover effects, transitions, and animations
- **Loading States**: User feedback during data fetching
- **Error Handling**: Graceful error messages and fallbacks
- **Accessibility**: Semantic HTML and keyboard navigation

## 🔧 Development Scripts

### Frontend Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Scripts

```bash
npm start        # Start JSON server (mock backend)
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Bootstrap for the UI framework
- React team for the amazing library
- Redux team for state management
- All open source contributors

---

**Happy Shopping! 🛒✨**
