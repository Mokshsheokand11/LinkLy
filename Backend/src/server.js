import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/auth/signup', (req, res) => {
    res.send('Signup Route');
});
app.get('/api/auth/Login', (req, res) => {
    res.send('Login Route');
});
app.get('/api/auth/Logout', (req, res) => {
    res.send('Logout Route');
});

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
});