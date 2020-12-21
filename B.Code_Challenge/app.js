const endpoint = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
data = fetch(endpoint).then((response) => response.json()).then((data) => {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i])
        let rawhtml = ` <center>
        <h3>Câu:${i+1}</h3>
        <div class="question">${data.results[i].question}</div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[0]}">A.<span>${data.results[i].incorrect_answers[0]}</span></div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].correct_answer}">B.<span>${data.results[i].correct_answer}</span></div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[1]}">C.<span>${data.results[i].incorrect_answers[1]}</span></div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[2]}">D.<span>${data.results[i].incorrect_answers[2]}</span></div>
        <div class="error${i}"></div>
    </center>`
        document.querySelector(".app").insertAdjacentHTML("beforeend", rawhtml)
    }

    let answers = document.querySelector(".form")
    document.querySelector(".submit").addEventListener("click", (event) => {
        event.preventDefault()
        let count = 0
        for (let i = 0; i < data.results.length; i++) {
            let a = "answers.answers" + i + ".value"
            console.log(a)
            answer = eval(a)
            console.log(answer)
            if (answer == data.results[i].correct_answer) {
                count++
            }
        }
        alert("Bạn trả lời đúng: " + count + " Câu")
    })
})

