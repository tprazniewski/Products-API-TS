import { Request, Response, RequestHandler } from "express";
import { Product } from "../entities/product";
import { appDataSource } from "../DB/mysql";
import { validationResult } from "express-validator";

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
export const addProduct: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());

  const { name, price } = req.body;

  try {
    const product = Product.create({
      name,
      price,
    });
    await product.save();
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ err: "Internal server error" });
  }
};
export const updateProduct: RequestHandler = async (req, res) => {
  const { id, name, price } = req.body;

  const product = await Product.findOneBy({
    id: parseInt(id),
  });
  product!.name = name;
  product!.price = price;
  product?.save();
  console.log(product);
  res.status(200).send({ message: "You Apdated product" });
};
export const deleteProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.delete(parseInt(id));
    return res.status(204).send({ message: " Product was deleted" });
  } catch (error) {
    return res.status(500).send({ err: "Internal server error" });
  }
};
