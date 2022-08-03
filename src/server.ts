import { server } from "./http";
import "./websocket/ChatService";

const port = process.env.PORT || 3000;

server.listen(port);
