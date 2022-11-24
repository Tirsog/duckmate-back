import express from "express";
const router = express.Router();
// Write your router code here!

import {
  getPosts,
  postsById,
  createPost,
  delPost,
  getPostsByStack,
} from "../models/posts.js";

router.get("/", async function (req, res) {
  console.log("doing get");
  if (req.query.stack !== undefined) {
    const post = await getPostsByStack(req.query.stack);
    res.json({ success: true, payload: post });
 
  } else {
    const posts = await getPosts();
    res.json({ success: true, payload: posts });
  }
});

// async function getAllPosts(res){
//   const posts = await getPosts();
//     res.json({ success: true, payload: posts });
// }

// async function getAllByStack(res, stack){
//   const post = await getPostsByStack(stack);
//   res.json({ success: true, payload: post });
// }

router.get("/:id", async function (req, res) {
  const posts = await postsById(req.params.id);
  res.json({ success: true, payload: posts });
});

router.post("/", async function (req, res) {
  const newPost = await createPost(req.body);
  res.status(201).json({ success: true, payload: newPost });
});

router.delete("/", async function (req, res) {
  const dPost = await delPost(req.query.username);
  res.status(200).json({ success: true, payload: dPost });
});

/* export default router = postRouter */
export default router;
