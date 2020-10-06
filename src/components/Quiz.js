import React, { useState } from 'react'
import { questions as questionnaire } from './../questions'
import { useParams, useHistory } from 'react-router-dom'

function Quiz() {
  const history = useHistory()
  const { index = 0 } = useParams()
  const questions = questionnaire[index]

  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState('')
  const [resume, setResume] = useState([])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)

  function handleAnswerSubmit(answerOption) {
    // set score
    if (answerOption.isCorrect) setScore(score + 1)
    // save answers
    const answerResult = answerOption.answerText || answer
    setResume([
      ...resume,
      {
        questionText: questions[currentQuestion].questionText,
        answer: answerResult,
        type: questions[currentQuestion].type,
        isCorrect: answerOption.isCorrect
      }
    ])
    // next question redirection
    const nextQuestion = answerOption.nextQuestion
    const finish = questions.length
    if (nextQuestion < finish) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  function handleGoBoard() {
    history.push('/')
  }

  return (
    <div className='App'>
      <div className='question-section'>
        <button onClick={handleGoBoard}>Board</button>
        <h1>Questionnaire {index}</h1>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].type === 2 ? (
          <div>
            <input
              name='answer'
              value={answer}
              onChange={event => setAnswer(event.target.value)}
            />
            <button
              onClick={() => handleAnswerSubmit(questions[currentQuestion].answerOptions[0])}>
              next question
            </button>
          </div>
        ) : (
          questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button key={index} onClick={() => handleAnswerSubmit(answerOption)}>
              {answerOption.answerText}
            </button>
          ))
        )}
      </div>
      {showScore && (
        <>
          {/* <div className='score-section'>
            You scored {score} out of {questions.length}
          </div> */}
          <div className='result-preview'>
            <pre>{JSON.stringify(resume, '', 2)}</pre>
          </div>
        </>
      )}
    </div>
  )
}

export default Quiz
