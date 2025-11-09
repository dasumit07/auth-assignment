# 🐶 WarmPaws – Pet Care in Winter

A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.  
Users can explore **local pet care services**, **winter pet clothing**, **grooming options**, and **expert tips** — all in one friendly interface.

---

## 🌐 Live Demo  
🔗 [Live Website](https://pet-care-assigment-09.netlify.app/)  


---

## 🎯 Purpose
The main goal of **WarmPaws** is to provide pet owners with an easy-to-use winter care platform that helps them:
- Book essential pet care services  
- Learn valuable winter safety tips  
- Discover stylish and cozy outfits for their pets  
- Connect with trusted grooming experts and vets  

---

## 🧱 Key Features

### 🏠 Home Page
- Warm winter-themed **Hero Slider** using Swiper.js  
- Popular Winter Care Services displayed dynamically from JSON data  
- Extra sections like:
  - “Winter Care Tips for Pets” 🧤  
  - “Meet Our Expert Vets” 🩺  
  - “Adopt a Friend” 🐕  

### 🔐 Authentication
- Firebase Authentication with:
  - Email & Password Login / Signup  
  - Google Sign-In  
- Password reset feature via Firebase  
- Protected routes using PrivateRoute  

### 👤 My Profile
- Displays user info: Name, Email, and Photo  
- Functional **Update Profile** option using Firebase’s `updateProfile()`  

### 📦 Service Details Page
- Protected route (only for logged-in users)  
- Displays full service info  
- Includes “Book Service” form with success toast  

### 💡 Extra Features
- Environment variables used for Firebase config  
- Toast notifications for feedback  
- Fully responsive across devices  
- Clean and modern UI with **TailwindCSS + DaisyUI**  

---

## 🧰 Technologies & Tools

| Category | Tools / Libraries |
|-----------|-------------------|
| Frontend | React.js, Vite |
| Styling | Tailwind CSS, DaisyUI |
| Animations | AOS /  Framer Motion |
| Authentication | Firebase Auth |
| React Hot Toast |
| Deployment | Netlify |
| State Management | React Context API |
| Routing | React Router DOM |

---

## 🔑 Environment Variables

The Firebase keys are stored securely in a `.env` file:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
