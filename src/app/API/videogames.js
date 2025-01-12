"use server";
export default async function apiGames() {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  if (apiKey) {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-SILO-KEY": apiKey,
        },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
      return null;
    }
  } else {
    console.log("error");
    return null;
  }
}
