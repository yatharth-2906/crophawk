# 🌾 CropHawk
CropHawk is an innovative web application designed to help farmers optimize their agricultural practices. Built with the MERN stack, it integrates machine learning models to provide the services like fertilizer recommendations, crop recommendations and yield predictiins. CropHawk aims to enhance agricultural productivity by providing data-driven insights, enabling better decision-making for sustainable farming.

## 🎯 Features
- **Fertilizer Recommendation**: Personalized fertilizer suggestions based on soil health and crop type.
- **Crop Recommendation**: Personalized crop suggestions based on crop type and other agricultural factors.
- **Yield Prediction**: Predicts crop yield based on historical data and agricultural factors to support efficient planning.

## 🛠️ Tech Stack
- **Frontend**: React.js, HTML/CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yatharth-2906/crophawk.git
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup (in new terminal)
```sh
cd frontend
npm install
npm run dev
```

## 🌍 Environment Variables

### 1️⃣ Create a `.env` file in the backend directory and add:
```
PORT=8000
SALT_ROUNDS=10
JWT_SECRET="your-secret-key"
DB_ONLINE="mongodb://127.0.0.1:27017/crophawk"
```

### 2️⃣ Create a `.env` file in the frontend directory and add:
```
VITE_BACKEND_URL='http://localhost:8000'
```

## 📞 Contact
For any issues, reach out at [yatharth2906@gmail.com] or open an issue on GitHub.
