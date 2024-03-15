export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
  } catch (error) {
    res.console.log("Errror in sendMessage Controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
