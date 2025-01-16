export const sendMessageToAI = async (message) => {
    try {
      const response = await fetch("http://localhost:5000/api/chat", {
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
  