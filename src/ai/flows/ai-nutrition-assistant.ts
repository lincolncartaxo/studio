// AINutritionAssistant provides personalized product recommendations based on user's dietary needs and preferences.
// It acts as a tool for healthy lifestyle choices.
//
// - nutritionAssistant - A function that provides personalized product recommendations.
// - NutritionAssistantInput - The input type for the nutritionAssistant function.
// - NutritionAssistantOutput - The return type for the nutritionAssistant function.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NutritionAssistantInputSchema = z.object({
  dietaryNeeds: z.string().describe('The dietary needs of the user.'),
  preferences: z.string().describe('The product preferences of the user.'),
});
export type NutritionAssistantInput = z.infer<typeof NutritionAssistantInputSchema>;

const NutritionAssistantOutputSchema = z.object({
  recommendations: z.string().describe('The personalized product recommendations for the user.'),
});
export type NutritionAssistantOutput = z.infer<typeof NutritionAssistantOutputSchema>;

export async function nutritionAssistant(input: NutritionAssistantInput): Promise<NutritionAssistantOutput> {
  return nutritionAssistantFlow(input);
}

const nutritionAssistantPrompt = ai.definePrompt({
  name: 'nutritionAssistantPrompt',
  input: {schema: NutritionAssistantInputSchema},
  output: {schema: NutritionAssistantOutputSchema},
  prompt: `You are an AI Nutrition Assistant. Your goal is to provide personalized product recommendations based on the user's dietary needs and product preferences.

Dietary Needs: {{{dietaryNeeds}}}
Product Preferences: {{{preferences}}}

Based on the above information, provide personalized product recommendations.`,
});

const nutritionAssistantFlow = ai.defineFlow(
  {
    name: 'nutritionAssistantFlow',
    inputSchema: NutritionAssistantInputSchema,
    outputSchema: NutritionAssistantOutputSchema,
  },
  async input => {
    const {output} = await nutritionAssistantPrompt(input);
    return output!;
  }
);
