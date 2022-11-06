import { body, ValidationChain } from "express-validator";

export const createValidator: ValidationChain[] = [
  body("name")
    .not()
    .isEmpty()
    .withMessage("The name field is mandatory")
    .isLength({ max: 100 })
    .withMessage("The name field length can't be higher than 100"),
  body("price")
    .trim()
    .isNumeric()
    .withMessage("Only Decimals allowed")
    .isLength({ max: 8 })
    .withMessage("The name field length can't be higher than 99999999"),
];
export const updateValidator: ValidationChain[] = [
  body("id")
    .trim()
    .isNumeric()
    .withMessage("The id field is mandatory and must be a number"),
  body("name")
    .not()
    .isEmpty()
    .withMessage("The name field is mandatory")
    .isLength({ max: 100 })
    .withMessage("The name field length can't be higher than 100"),
  body("price")
    .trim()
    .isNumeric()
    .withMessage("Only Decimals allowed")
    .isLength({ max: 8 })
    .withMessage("The name field length can't be higher than 99999999"),
];

export const deleteValidator: ValidationChain[] = [
  body("id")
    .trim()
    .isNumeric()
    .withMessage("The id field is mandatory and must be a number"),
];
