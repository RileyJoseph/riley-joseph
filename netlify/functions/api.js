exports.handler = async function (event, context) {
  console.log("EVENT", event.httpMethod);
  try {
    if (event.httpMethod === "GET") {
      // ✅ Handle Google Books API
      const query = event.queryStringParameters.q;
      console.log("Google Books API Call:", query);

      if (!query) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Missing search query parameter 'q'" }),
        };
      }

      const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
      if (!GOOGLE_BOOKS_API_KEY) {
        throw new Error("Missing Google Books API Key in environment variables.");
      }

      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${GOOGLE_BOOKS_API_KEY}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Google Books API Error: ${response.statusText}`);
      }

      const data = await response.json();

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
    } 
    
    else if (event.httpMethod === "POST") {
      // ✅ Handle OpenAI Chat Completion API
      console.log("OpenAI Chat API Request:", event.body);
      
      const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
      if (!OPENAI_API_KEY) {
        throw new Error("Missing OpenAI API Key in environment variables.");
      }

      const requestBody = JSON.parse(event.body);
      const messages = requestBody.messages;

      if (!messages || !Array.isArray(messages)) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Invalid messages array." }),
        };
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: messages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text + " - reply to this like you were a pirate please!",
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API Error: ${response.statusText}`);
      }

      const data = await response.json();

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: data.choices[0].message.content }),
      };
    } 
    
    else {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }
  } catch (error) {
    console.error("API Error:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
