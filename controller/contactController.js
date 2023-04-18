// @desc Get all contacts
// @route Get  /api/contacts
// @acces public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

module.exports = {
  getContact,
};
