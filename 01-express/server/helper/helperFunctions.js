
exports.getUniqueId = () => {
  const uniqueId =
    new Date().getTime().toString() + Math.floor(Math.random() * 1000000);
  return uniqueId;
};
