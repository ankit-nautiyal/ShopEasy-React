
# ShopEasy - Shopping Website

ShopEasy is a responsive e-commerce website that uses React with the Fake Store API to provide a seamless shopping experience, including user authentication, product browsing, cart management, and a checkout process. The application features a clean UI, a mobile-first design, and global state management for the cart.

---

## Tech Stack

- **Frontend**: React.js (Vite)
- **Routing**: React Router v6
- **State Management**: React Context API (for cart)
- **HTTP Client**: Axios (for API calls)
- **Styling**: Plain CSS (mobile-first)
- **API**: [Fake Store API](https://fakestoreapi.com/docs)
- **Build Tool**: Vite

---

## Project Screeshots:
![image](https://github.com/user-attachments/assets/d3ec9b9d-fba4-4afd-b86b-6f996f89ab98)
![image](https://github.com/user-attachments/assets/80d6c95c-fc5a-4a7d-ad26-5b523f347767)
![image](https://github.com/user-attachments/assets/e237e402-d302-462c-9242-79086be89263)
![image](https://github.com/user-attachments/assets/51a5abc8-1480-403b-99ee-224bbd8a420d)
![image](https://github.com/user-attachments/assets/935320d6-90aa-4dca-b888-05342cd4a41e)
![image](https://github.com/user-attachments/assets/377a9d0f-6b98-4dc7-83b9-cd62929b0f5f)
![image](https://github.com/user-attachments/assets/2eab3a71-63ac-4a63-a2e2-04096d36da44)
![image](https://github.com/user-attachments/assets/6ec60a36-0605-4c60-b0c9-a980089aa47d)
![image](https://github.com/user-attachments/assets/82e6f4aa-b662-4ad6-818f-380ec9bf751f)
![image](https://github.com/user-attachments/assets/c30f30f6-e06f-4ecf-a144-1743c77bfe6c)
![image](https://github.com/user-attachments/assets/d4301588-97c2-4d8a-9d26-7d6b0724a870)
![image](https://github.com/user-attachments/assets/cdbc764d-ebfa-4b72-b6cc-2b577a8a77c9)
![image](https://github.com/user-attachments/assets/11509700-60de-43fb-bf09-e7c16867ddd7)
![image](https://github.com/user-attachments/assets/fd9416c3-8c83-4ee8-a647-5f2e87b50106)



## Features

- **Login Page**:
  - Authenticate users via Fake Store API's `/auth/login` endpoint.
  - Store JWT token in `localStorage`.
  - Redirect to the home page on successful login.
- **Product Listing (Home)**:
  - Fetch and display products in a responsive grid.
  - Filter products by category using `/products/category/:category`.
  - Search bar to filter products by title.
- **Product Detail Page**:
  - Display detailed product info (image, title, description, price).
  - "Add to Cart" functionality.
- **Cart Page**:
  - View cart items with quantity controls and removal options.
  - Calculate total price dynamically.
  - Checkout clears the cart and shows a confirmation popup (auto-closes after 4 seconds).
- **Header**:
  - Navigation links to Home, Cart, and Logout.
  - Displays real-time cart item count.
  - Logout clears JWT and redirects to Login.
- **Footer**:
  - Includes brand info, contact details, and social media links.
  - Responsive design with a dynamic copyright year.
- **Responsive Design**:
  - Mobile-first approach using plain CSS.
  - It adapts seamlessly to desktop and mobile devices.



## Directory Structure

```
shopping-website/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts (if any)
│   ├── components/           # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Popup.jsx
│   ├── pages/                # Page components
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   ├── context/              # Context API
│   │   ├── CartContext.jsx
│   ├── styles/               # CSS files
│   │   ├── Login.css
│   │   ├── Home.css
│   │   ├── ProductDetail.css
│   │   ├── Cart.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── ProductCard.css
│   │   ├── Popup.css
│   ├── App.jsx               # Main app with routes
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
├── .gitignore                # Git ignore file
├── package.json              # Project dependencies
├── README.md                 # This file
├── vite.config.js            # Vite configuration
```

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- A modern web browser

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ankit-nautiyal/ShopEasy-React.git
   cd shopping-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser (port may vary).

4. **Build for Production** (Optional):
   ```bash
   npm run build
   ```
   The production-ready files will be in the `dist/` folder.

## Usage

1. **Login**:
   - Use Fake Store API credentials (e.g., `username: "mor_2314"`, `password: "83r5^_"`).
   - On success, you’ll be redirected to the home page.
2. **Browse Products**:
   - Filter by category or search by product name.
   - Click a product to view details.
3. **Manage Cart**:
   - Add products to the cart from the product detail page.
   - Update quantities or remove items in the cart.
   - Click "Checkout" to place an order (cart clears, popup appears).
4. **Logout**:
   - Click "Logout" in the header to clear the JWT and return to the login page.

## Testing

- **API Testing**:
  - Ensure the Fake Store API (`https://fakestoreapi.com`) is accessible.
  - Test login with provided credentials.
- **UI Testing**:
  - Verify responsiveness on mobile (<600px) and desktop.
  - Check navigation, cart updates, and popup behavior.
- **Functionality**:
  - Confirm cart state persists across pages.
  - Test checkout clears the cart and shows the confirmation.

## Future Improvements

- **Error Handling**: Display user-friendly messages for API failures.
- **Styling**: Add animations or use a CSS framework like Tailwind.
- **Local Storage for Cart**: Persist cart state across sessions.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.


## Acknowledgments

- [Fake Store API](https://fakestoreapi.com) for providing a free e-commerce API.
- [Vite](https://vitejs.dev) for a fast development environment.
- [React](https://reactjs.org) for a powerful UI library.

---

### Notes for Customization
- **Repository URL**: Replace `https://github.com/ankit-nautiyal/ShopEasy-React.git` with your actual repo URL.
- **Screenshots**: You can add screenshots by placing them in a `screenshots/` folder and linking them in the README (e.g., `![Login Page](screenshots/login.png)`).
- **Deployed Link**: If you deploy the app (e.g., on Vercel), add a "Live Demo" section with the URL.


