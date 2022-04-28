import axios from "axios";

const URL_IMAGE = "https://api.thecatapi.com/v1/images/search";

const getImage = async () => {
  const {
    data: [{ url }]
  } = await axios.get(URL_IMAGE);
  return url;
};

export default {
  getImage
};
