import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function sendEmail(to, courseTitle) {
  await transporter.sendMail({
    from: `"ArchiCourse" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Course Files",
    html: `<p>Thank you for purchasing <strong>${courseTitle}</strong>.</p><p>Find your course attached or download it <a href="#">here</a>.</p>`,
    // attachments: [{ filename: "course.zip", path: "https://s3.link/file.zip" }],
  });
}
oseyiomon