const axios = require("axios");

const { API_KEY } = process.env;

const getPlatforms = async () => {
  const searchApi = (
    await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
  ).data.results;

  const filterData = searchApi.map((platforms) => platforms.name);

  const platformsGroup = filterData.flat();
  const platformsUnique = [...new Set(platformsGroup)];
  return platformsUnique;
};

module.exports = getPlatforms;
