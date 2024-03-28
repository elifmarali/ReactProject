const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
}
export const fetchData = async (difficult, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficult}&type=multiple`
    const response = await (await (fetch(url))).json()
    return response.results.map((dt) => (
        { ...dt, answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer]) }
    ));
}