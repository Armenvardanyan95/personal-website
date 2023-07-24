import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({ providedIn: 'root' })
export class ChatGPTService {
  private readonly openai = new OpenAIApi(
    new Configuration({
      apiKey: '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',
    })
  );

  async runCompletion(prompt: string) {
    const response = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {content: prompt, role: 'system', name: 'Armen', },
      ],
      max_tokens: 3_000,
    });

    return response.data.choices[0].message;
  }
}