const handleAPIError = function (err) {
  if (err.response.status === 401) {
    throw new Error(
      "Your API key id invalid - Go to https://min-api.cryptocompare.com"
    );
  } else if (err.response.status === 404) {
    throw new Error("Your API is not responding");
  } else {
    throw new Error("Something is not working.");
  }
};

module.exports = { handleAPIError };
