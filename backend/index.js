const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const cron = require("node-cron");
const dayjs = require("dayjs");
require("dotenv").config();

const api = axios.create({
  baseURL: "https://api.chatengine.io",
  headers: {
    "PRIVATE-KEY": process.env.PRIVATE_KEY,
  },
});
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
cron.schedule("*/5 * * * *", async () => {
  try {
    const response = await api.get("/users");
    const dayCurrency = dayjs();

    const accountFilterDelete = response.data.filter((item) => {
      const diffInMinute = dayCurrency.diff(dayjs(item.created), "minute");
      if (diffInMinute > 10) {
        return item;
      }
    });

    Promise.all(
      accountFilterDelete.map(async (item) => {
        await api.delete(`/users/${item.id}`);
      })
    );
  } catch (error) {
    console.log(error);
  }
});

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  const resUsers = await api.get("/users");
  console.log(resUsers.data.length);

  if (resUsers.data.length >= 10) {
    return res.status(400).json({
      message: "The maximum number of active users has now been reached.",
    });
  }

  try {
    const response = await api.put("/users/", {
      username,
      secret: username,
      first_name: username,
    });
    //dc41a01a-90ca-4e5d-9362-e815760c4f39
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(error.response.status).json(error.response.data);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await api.delete(`/users/${req.params.id}`);
    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(4000);
