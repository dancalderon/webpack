import "./style.css";
import { TaskCollection, loger } from "./app.js";
import { base64encode, base64decode } from "nodejs-base64";
new TaskCollection(["Go to the store", "Finish screencast", "Eat cake"]).dump();
let encoded = base64encode("hey there");
loger(encoded);
loger("holi");
