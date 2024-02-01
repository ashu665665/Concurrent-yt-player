import server from "./app.js";
import { port } from "./config.js";

server.listen(port);
console.log(`server on port ${port}`);
