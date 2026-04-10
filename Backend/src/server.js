import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from './utils/db.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust based on your frontend port
    credentials: true,
}));

app.use('/api/auth', authRoutes);

// Simple WebSocket (Socket.IO) signaling server for WebRTC
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*' },
});

io.on('connection', (socket) => {
    console.log('socket connected:', socket.id);

    socket.on('join', (room) => {
        socket.join(room);
        socket.to(room).emit('peer-joined', { id: socket.id });
    });

    socket.on('offer', ({ room, sdp }) => {
        socket.to(room).emit('offer', { sdp, from: socket.id });
    });

    socket.on('answer', ({ room, sdp }) => {
        socket.to(room).emit('answer', { sdp, from: socket.id });
    });

    socket.on('ice-candidate', ({ room, candidate }) => {
        socket.to(room).emit('ice-candidate', { candidate, from: socket.id });
    });

    socket.on('leave', (room) => {
        socket.leave(room);
        socket.to(room).emit('peer-left', { id: socket.id });
    });

    socket.on('disconnect', () => {
        console.log('socket disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});