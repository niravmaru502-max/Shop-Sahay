
import { GoogleGenAI } from "@google/genai";
import { Message, Language } from "../types";

export const getGeminiResponse = async (history: Message[], language: Language) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the ShopSahay Business Assistant. Your goal is to help small shop owners in Gujarat, India, grow their businesses.
    Keep your advice practical, localized, and encouraging.
    
    Current User Language: ${language === 'en' ? 'English' : language === 'gu' ? 'Gujarati' : 'Hindi'}.
    
    Rules:
    - If the user asks in English, answer in English.
    - If the user asks in Gujarati, answer in Gujarati.
    - If the user asks in Hindi, answer in Hindi.
    - Keep responses concise and bulleted for readability.
    - You can answer questions about: Inventory management, customer retention, digital marketing (WhatsApp, Google Maps), financial planning for small shops, and improving daily sales.
    - Always mention that users can talk to a human expert via ShopSahay for deeper audits.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong with our AI service. Please contact our support team.";
  }
};
