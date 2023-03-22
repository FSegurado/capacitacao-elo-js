import axios from "axios";

export default async function handler(req, res) {
  const response = await axios({
    method: req.method,
    url: "https://dog.ceo/api/breeds/image/random",
  });

  res.status(response.status).json(response.data);
}
