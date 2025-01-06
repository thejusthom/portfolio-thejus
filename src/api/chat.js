import { StreamingTextResponse, createStreamDataTransformer } from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';

export async function POST(req) {
  try {
    const { messages } = await req.json();
    console.log('[API] Received messages:', messages);

    const model = new ChatOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      model: 'gpt-3.5-turbo',
      temperature: 0.3,
      streaming: true,
      verbose: true,
    });

    const parser = new HttpResponseOutputParser();
    const chain = RunnableSequence.from([
      {
        question: (input) => input.question,
        chat_history: (input) => input.chat_history,
        context: () => "You are a helpful assistant."
      },
      PromptTemplate.fromTemplate(`
        Answer the question based on the chat history.
        Chat History: {chat_history}
        Question: {question}
        Answer:
      `),
      model,
      parser,
    ]);

    console.log('[API] Processing request...');
    const stream = await chain.stream({
      chat_history: messages.slice(0, -1).map(m => `${m.role}: ${m.content}`).join('\n'),
      question: messages[messages.length - 1].content,
    });

    console.log('[API] Sending response stream...');
    return new StreamingTextResponse(
      stream.pipeThrough(createStreamDataTransformer())
    );

  } catch (error) {
    console.error('[API] Error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
