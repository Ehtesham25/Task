import triplists from "../models/triplists.js";
import mongoose from "mongoose";
import express from "express";

express.Router();

export const getPosts = async (req, res) => {
  try {
    const triplist = await triplists.find();
    res.status(200).json({
      data: triplist,
    });
  } catch (err) {
    console.log("error", err);
  }
};

// we use query to search any things like posts, person etc
// we use PARAMS to search specific things like id=123

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new triplists(post);
  try {
    await newPost.save();
    res.status(201).send(newPost);
  } catch (err) {
    res.status(409).send(err);
  }
};
