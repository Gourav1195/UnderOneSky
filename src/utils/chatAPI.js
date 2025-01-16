export const sendMessageToAI = async (message) => {
    try {
      const response = await fetch("https://under-one-sky-server.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
  
      const data = await response.json();
      return data.reply; // Return AI response
    } catch (error) {
      console.error("❌ Chat API Error:", error);
      return "Sorry, something went wrong.";
    }
  };
  