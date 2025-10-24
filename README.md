# MERN Notes App

A full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js) featuring a modern UI with grid background effects and rate limiting.

## Features

- **Create, Read, Update, Delete** notes
- **Modern UI** with Tailwind CSS and DaisyUI
- **Rate Limiting** with Upstash Redis
- **Responsive Design**
- **React Router** for seamless navigation
- **MongoDB** for data persistence

## App Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS & DaisyUI
- React Router
- Axios
- Lucide Icons

**Backend:**
- Node.js & Express
- MongoDB & Mongoose
- Upstash Redis (Rate Limiting)
- CORS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- Upstash Redis account (for rate limiting)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NoolAngelo/mern-note-noolangelo.git
   cd mern-note-noolangelo
   ```

2. **Install dependencies**
   ```bash
   npm run build
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   NODE_ENV=development
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```

4. **Run the application**

   **Development mode:**
   ```bash
   # Run backend
   cd backend
   npm run dev

   # Run frontend (in a new terminal)
   cd frontend
   npm run dev
   ```

   **Production mode:**
   ```bash
   npm start
   ```

## Project Structure

```
mern-noteapp/
├── backend/
│   ├── src/
│   │   ├── config/          # Database & Upstash config
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Rate limiter middleware
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   └── server.js        # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── lib/             # Utilities & axios config
│   │   └── App.jsx          # Main app component
│   └── package.json
└── package.json
```

## API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a single note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## License

ISC

## 👤 Author

**NoolAngelo**

- GitHub: [@NoolAngelo](https://github.com/NoolAngelo)
- Repository: [mern-note-noolangelo](https://github.com/NoolAngelo/mern-note-noolangelo)
