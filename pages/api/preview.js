// A simple example for testing it manually from your browser.
// If this is located at pages/api/preview.js, then
// open /api/preview from your browser.
export default function handler(req, res) {
  res.setPreviewData({
    message: "Hey, this is a preview",
    timestamp: new Date().toISOString(),
  });
  res.redirect("/preview");
}
