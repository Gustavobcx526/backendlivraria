import express from "express";
import { atualizarUsuario, criarUsuario, deletarUsuario, listarUsuarios, obterUsuario } from "../controllers/usuarios.controller.js";
// const express = require("express");

const route = express.Router();

route.get("/", listarUsuarios);
route.get("/:id", obterUsuario);
route.post("/", criarUsuario);
route.put("/:id", atualizarUsuario);
route.delete("/:id", deletarUsuario);

export default route


