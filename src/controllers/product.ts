import { Request, Response, RequestHandler } from "express";
import { Product } from "../entities/product";

export const getProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOneBy({
      id: parseInt(id),
    });
    return res.json(product);
  } catch (error) {
    return res.status(500).send({ err: "Internal server error" });
  }
};
export const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({ err: "Internal server error" });
  }
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
