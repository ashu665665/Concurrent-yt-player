import express from "express";
import playerRoutes from "./routes/player.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "node:http";
import bodyParser from "body-parser";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const io = new Server(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('acbc837', (event) => {
        console.log(event);
        io.emit('acbc837', event);
    });
});



// routes
app.use(playerRoutes);

// starting the server
export default server;