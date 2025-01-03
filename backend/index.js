import express from 'express';
import  cors from 'cors';
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(cors());

let quiz = [
    {
        qid : 1,
        question : "Which is the most popular language on GitHub?",
        opt1 : "Java",
        opt2 : "Python",
        opt3 : "Javascript",
        opt4 : "C++",
        answer : "Python"
    }
]

app.get('/', (req, res)=>{
    res.json(quiz);
})

app.listen(PORT, ()=>{
    console.log(`quiz app is listening to http://localhost:${PORT}` );
})