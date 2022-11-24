import express from "express";
const router = express.Router();
// Write your router code here!

import {
  getCus,
  cusById,
  createCus
  /*
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
  */

} from "../models/customers.js";

router.get("/", async function (req, res) {
  const customer = await getCus();
  res.json({ success: true, payload: customer });
  
});

router.get("/:id", async function (req, res) {
  const customer = await cusById(req.params.id);
  res.json({ success: true, payload: customer });
});


router.post("/", async function (req,res){
  const newCustomer = await createCus(req.body);
  res.status(201).json({success:true ,payload: newCustomer})
  
});


/* export default router = customerRouter ; */

export default router;