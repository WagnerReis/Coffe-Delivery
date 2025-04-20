# Coffee Delivery ☕

A modern React application for ordering and delivering coffee, built with React, TypeScript, and Vite.

## Overview

Coffee Delivery is a web application that allows users to browse a catalog of coffee products, add items to their cart, and complete the checkout process with delivery information.

## Features

- 🛒 Shopping cart functionality
- 📋 Product catalog with filtering options
- 🚚 Delivery address form
- 💳 Payment method selection
- 🔄 State management with React Context API
- 🎨 Styled with modern CSS-in-JS

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **React Router** - Navigation
- **Styled Components** (or alternative styling solution)
- **Context API** - State management
- **React Hook Form** - Form handling
- **Zod** - Form validation
- **Phosphor Icons** - Modern icon library

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/WagnerReis/Coffe-Delivery.git
```

```bash
# Navigate to project directory
cd Coffe-Delivery
```

```bash
# Install dependencies
npm install
```

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Application Flow

1. **Home Page**: Users can browse the coffee catalog, filter by type, and add items to cart
2. **Cart**: Users can view their cart, adjust quantities, and remove items
3. **Checkout**: Users provide delivery information and select payment method
4. **Success**: Order confirmation with delivery details

## State Management

The application uses React Context API for state management:
- **CartContext**: Manages the shopping cart state (items, quantities, total)


## Styling

The application uses a consistent design system with:
- Typography scale
- Color palette
- Spacing system
- Component variants

## License
This project is licensed under the MIT License - see the LICENSE file for details.

