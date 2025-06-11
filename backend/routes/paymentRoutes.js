import Order from "../models/Order.js";
import sendEmail from "../utils/mailer.js";

export const handlePayment = async (req, res) => {
  const { name, email, phone, courseTitle, tierName, price } = req.body;

  try {
    const order = await Order.create({ name, email, phone, courseTitle, tier: tierName, price });

    await sendEmail(email, courseTitle); // We’ll create this next

    res.status(200).json({ success: true, message: "Order placed and email sent" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
