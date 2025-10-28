"use server";

import { nutritionAssistant, type NutritionAssistantInput } from "@/ai/flows/ai-nutrition-assistant";

export async function getNutritionAdvice(input: NutritionAssistantInput) {
  try {
    const result = await nutritionAssistant(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Desculpe, não foi possível obter a recomendação. Tente novamente." };
  }
}
