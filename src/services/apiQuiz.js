export async function getQuiz(dispatch, subject) {
  try {
    const source = subject.toLowerCase();
    dispatch({ type: "fetchData" });
    const res = await fetch(`http://localhost:1028/quizzes/${source}`);

    if (!res.ok) throw new Error("Error");

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
