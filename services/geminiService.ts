
import { GoogleGenAI, Type } from "@google/genai";
import { ProposalData } from "../types";

export class GeminiService {
  /**
   * Generates a premium commercial proposal using Gemini.
   * Following @google/genai guidelines:
   * - Using gemini-3-pro-preview for complex strategy generation.
   * - Initializing GoogleGenAI inside the method call.
   * - Using response.text property.
   */
  async generateProposal(clientName: string, niche: string): Promise<ProposalData> {
    // Instantiate right before making an API call to ensure the latest configuration/key is used.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `Сгенерируй премиальное коммерческое предложение (КП) для клиента "${clientName}" в индустрии "${niche}".
    Язык: РУССКИЙ.
    Тон: Профессиональный, уверенный, деловой (B2B). Используй обращение "Вы".
    Фокус: "Контент как стратегический инструмент управления и роста бизнеса", а не просто SMM.
    
    Структура должна включать:
    1. Hero: Заголовок и подзаголовок (привлекающий внимание).
    2. Services: Список из 4 ключевых направлений работы.
    3. Growth Tool: Описание контента как актива.
    4. Audience: Сегменты целевой аудитории (первичные и вторичные).
    5. Rubrics: 3-4 примера рубрик контента (название и описание).
    6. Positioning: Стратегия позиционирования (заголовок и подробное описание).
    7. Ads: 3 направления продвижения (таргет, аналитика и т.д.).
    8. Pricing: Обоснованная стоимость в рублях.

    Формат ответа: Валидный JSON согласно предоставленной схеме.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview", // Complex strategy reasoning task
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hero: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                subtitle: { type: Type.STRING },
              },
              required: ["title", "subtitle"],
              propertyOrdering: ["title", "subtitle"]
            },
            services: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                },
                required: ["title", "description"],
                propertyOrdering: ["title", "description"]
              }
            },
            growthTool: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
              },
              required: ["title", "description"],
              propertyOrdering: ["title", "description"]
            },
            audience: {
              type: Type.OBJECT,
              properties: {
                primary: { type: Type.ARRAY, items: { type: Type.STRING } },
                secondary: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
              required: ["primary", "secondary"],
              propertyOrdering: ["primary", "secondary"]
            },
            rubrics: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                },
                required: ["title", "description"],
                propertyOrdering: ["title", "description"]
              }
            },
            positioning: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
              },
              required: ["title", "description"],
              propertyOrdering: ["title", "description"]
            },
            ads: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                },
                required: ["title", "description"],
                propertyOrdering: ["title", "description"]
              }
            },
            pricing: {
              type: Type.OBJECT,
              properties: {
                amount: { type: Type.STRING },
                currency: { type: Type.STRING },
                period: { type: Type.STRING },
              },
              required: ["amount", "currency", "period"],
              propertyOrdering: ["amount", "currency", "period"]
            }
          },
          required: ["hero", "services", "growthTool", "audience", "rubrics", "positioning", "ads", "pricing"]
        }
      }
    });

    const rawJson = JSON.parse(response.text || '{}');
    
    // Enrich the AI response with local data and visual assets to match ProposalData interface
    return {
      ...rawJson,
      clientName,
      visuals: Array.from({ length: 9 }).map((_, i) => 
        `https://picsum.photos/seed/${niche}_v${i}/400/400`
      ),
      rubrics: rawJson.rubrics.map((r: any, i: number) => ({
        ...r,
        imageUrl: `https://picsum.photos/seed/${niche}_r${i}/800/600`
      })),
      positioning: {
        ...rawJson.positioning,
        image: `https://picsum.photos/seed/${niche}_p/800/1000`
      }
    };
  }
}
