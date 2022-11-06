import { Request, Response, RequestHandler } from "express";

export const getProduct: RequestHandler = (req, res) => {
  res.status(200).send({ message: "Your product" });
};
export const getAllProducts: RequestHandler = (req, res) => {
  res.status(200).send({ message: "Your product List is" });
};
export const addProduct: RequestHandler = (req, res) => {
  res.status(200).send({ message: "You added product" });
};
export const updateProduct: RequestHandler = (req, res) => {
  res.status(200).send({ message: "You Apdated product" });
};
export const deleteProduct: RequestHandler = (req, res) => {
  res.status(200).send({ message: "You Updated Prduct" });
};
