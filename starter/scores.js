var highScores = [];

const takeQuiz = (initials) => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(`${questions[i].prompt}\n${questions[i].options}`);
        if (userAnswer === questions[i].answer) {
            score++;
        }
    }
    highScores.push({initials, score});
    highScores.sort((a, b) => b.score - a.score);
    console.log(`${initials}, your score is ${score}.`);
    console.log(`High Scores: ${highScores}`);
}

// Take Quiz
let userInitials = prompt("Please enter your initials:");
takeQuiz(userInitials);