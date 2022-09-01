import axios from "axios";

export default function handler(req, res) {
  axios
    .get("https://bug-hunter-squad.herokuapp.com/country")
    .then((response) => {
        res.status(200).json(response?.data)
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}
