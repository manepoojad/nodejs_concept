// Api base url depend on environment
exports.handleGetApiBaseURL = () => {
  const returnApiBaseUrl = process.env.PORT || "8000";
  return returnApiBaseUrl;
};

exports.handleGetApiBaseURLSwagger = () => {
  const returnApiBaseUrl = process.env.PORT || "localhost:8000";
  return returnApiBaseUrl;
};
