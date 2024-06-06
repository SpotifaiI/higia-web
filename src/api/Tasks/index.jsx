import axios from "axios";

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(
      "https://higia-server.fly.dev/higia-server/api/tasks",
      taskData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
