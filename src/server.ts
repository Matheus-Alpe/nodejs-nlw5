import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () =>
    console.log("///\n\nServer is running on port 3333.\n\n///")
);
