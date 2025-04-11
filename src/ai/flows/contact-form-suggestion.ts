'use server';
/**
 * @fileOverview A contact form suggestion AI agent.
 *
 * - contactFormSuggestion - A function that handles the contact form suggestion process.
 * - ContactFormSuggestionInput - The input type for the contactFormSuggestion function.
 * - ContactFormSuggestionOutput - The return type for the contactFormSuggestion function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ContactFormSuggestionInputSchema = z.object({
  userInput: z.string().describe('The user input from the contact form.'),
});
export type ContactFormSuggestionInput = z.infer<typeof ContactFormSuggestionInputSchema>;

const ContactFormSuggestionOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('The suggestions for relevant content or services.'),
});
export type ContactFormSuggestionOutput = z.infer<typeof ContactFormSuggestionOutputSchema>;

export async function contactFormSuggestion(input: ContactFormSuggestionInput): Promise<ContactFormSuggestionOutput> {
  return contactFormSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormSuggestionPrompt',
  input: {
    schema: z.object({
      userInput: z.string().describe('The user input from the contact form.'),
    }),
  },
  output: {
    schema: z.object({
      suggestions: z.array(z.string()).describe('The suggestions for relevant content or services.'),
    }),
  },
  prompt: `You are an AI assistant helping users find relevant content or services based on their input in the contact form.

  Based on the following user input, suggest relevant content or services:

  User Input: {{{userInput}}}

  Suggestions:`, // Ensure the output contains only relevant suggestions.
});

const contactFormSuggestionFlow = ai.defineFlow<
  typeof ContactFormSuggestionInputSchema,
  typeof ContactFormSuggestionOutputSchema
>({
  name: 'contactFormSuggestionFlow',
  inputSchema: ContactFormSuggestionInputSchema,
  outputSchema: ContactFormSuggestionOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
}
);
