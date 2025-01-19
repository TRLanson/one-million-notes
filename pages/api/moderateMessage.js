import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
      
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = "return false if the following text is CLEARLY hurtful/harmful/discriminatory to others or if it contains a link to another website, otherwise return true" + text;

      const result = await model.generateContent(prompt);
      const response = result.response;
      const output = response.text();

      res.status(200).json({ output });
    } catch (error) {
      console.error("Error moderating message:", error);
      res.status(500).json({ error: "Error moderating message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
