export async function getQuiz() {
  try {
    const res = await fetch("http://localhost:1028/quizzes/html");

    if (!res.ok) throw new Error("Error");

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
