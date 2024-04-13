PC Parts E-Commerce Platform & 
Welcome to my PC Parts E-Commerce Platform & Dashboard built with Next.js! This project aims to provide a comprehensive solution for selling wired PC parts with a modern and efficient tech stack.

Features

E-Commerce Frontend: Browse, search, and purchase a wide range of PC parts.
Dashboard: Manage products, orders, customers, and more from a user-friendly admin interface.
CMS: Easily update content, manage categories, and customize your online store.
Authentication & Authorization: Secure user authentication and role-based access control.
Responsive Design: Ensures a seamless experience across devices of all sizes.

Tech Stack

Next.js 13: Utilizing the latest features and improvements for server-side rendering and routing.
React: Building a dynamic and interactive user interface.
Tailwind CSS: Rapidly style components with utility-first CSS classes.
Prisma: ORM for database interactions, providing type-safe database queries.
MySQL: Reliable relational database management system for storing product and user data.

Installation

Clone this repository: git clone https://github.com/GabrielPlus/ecom-admin.git
Navigate to the project directory: cd pc-parts-ecommerce
Install dependencies: npm install
Set up your MySQL database and configure the connection in .env file.
Run migrations: npx prisma migrate dev
Seed the database with initial data: npx prisma db seed
Start the development server: npm run dev

Configuration

Environment Variables: Configure environment-specific variables in the .env file. Ensure to set up variables for database connection details, JWT secret, etc.
Usage
Frontend: Access the E-Commerce platform by navigating to / in your browser.
Dashboard: Access the admin dashboard by navigating to /admin and logging in with your credentials.
Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.