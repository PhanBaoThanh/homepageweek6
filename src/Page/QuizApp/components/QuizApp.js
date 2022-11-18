import React,{useState} from 'react'
import './quizapp.scss'
import Button from '../../Button/Button'

const QuizApp = () => {
  const data = [
    {
      question: "1 + 1 * 2 = ?",
      answers: [
        {
          answer: "1",
          isTrue: false
        },
        {
          answer: "2",
          isTrue: false
        },
        {
          answer: "3",
          isTrue: true
        },
        {
          answer: "4",
          isTrue: false
        },

      ]
    },
    {
      question: "1 + 1 * 2 - 10= ?",
      answers: [
        {
          answer: "7",
          isTrue: false
        },
        {
          answer: "-7",
          isTrue: true
        },
        {
          answer: "0",
          isTrue: false
        },
        {
          answer: "1",
          isTrue: false
        },

      ]
    },
    {
      question: "1 + 1 * 2 + (10 / 2) = ?",
      answers: [
        {
          answer: "7",
          isTrue: true
        },
        {
          answer: "2",
          isTrue: false
        },
        {
          answer: "0",
          isTrue: false
        },
        {
          answer: "4",
          isTrue: false
        },

      ]
    },
    {
      question: "1 + 2 * jack = ?",
      answers: [
        {
          answer: "5.000.003",
          isTrue: true
        },
        {
          answer: "5.000.000",
          isTrue: false
        },
        {
          answer: "4.999.997",
          isTrue: false
        },
        {
          answer: "4.000.000",
          isTrue: false
        },

      ]
    },
    {
      question: "jack * jack - jack = ?",
      answers: [
        {
          answer: "20.000.000",
          isTrue: true
        },
        {
          answer: "25.000.000",
          isTrue: false
        },
        {
          answer: "30.000.000",
          isTrue: false
        },
        {
          answer: "20.000.000",
          isTrue: false
        },

      ]
    },
    {
      question: "2 ^ 3 = ?",
      answers: [
        {
          answer: "2",
          isTrue: false
        },
        {
          answer: "4",
          isTrue: false
        },
        {
          answer: "6",
          isTrue: false
        },
        {
          answer: "8",
          isTrue: true
        },

      ]
    },
    {
      question: "(2 ^ 2) * (2 ^ 3) = ?",
      answers: [
        {
          answer: "16",
          isTrue: false
        },
        {
          answer: "24",
          isTrue: false
        },
        {
          answer: "32",
          isTrue: true
        },
        {
          answer: "64",
          isTrue: false
        },

      ]
    },
    {
      question: "(2 ^ 2) * 2 + (2 ^ 3) - 1 = ?",
      answers: [
        {
          answer: "1",
          isTrue: false
        },
        {
          answer: "0",
          isTrue: false
        },
        {
          answer: "-1",
          isTrue: true
        },
        {
          answer: "-2",
          isTrue: false
        },

      ]
    },
    {
      question: "(jack ^ 2 - jack / 2 + jack ) / jack = ?",
      answers: [
        {
          answer: "5.000.000",
          isTrue: false
        },
        {
          answer: "5.000.000,5",
          isTrue: true
        },
        {
          answer: "5.000.000.000",
          isTrue: false
        },
        {
          answer: "50.000.000",
          isTrue: false
        },

      ]
    },
    {
      question: "Biết liêm là ai không?",
      answers: [
        {
          answer: "=)) biết",
          isTrue: false
        },
        {
          answer: "Liêm là thằng nào",
          isTrue: false
        },
        {
          answer: "Next",
          isTrue: true
        },
        {
          answer: "Prev",
          isTrue: false
        },

      ]
    },
  ]

  const [questions,setQuestions] = useState(data[0])
  const [point,setPoint] = useState(0)
  const [count,setCount] = useState(0)

  const handleClickAnswer = check => {
    if(check)
      setPoint(prev => prev + 1)
    setCount(prev => prev + 1)
    if(count + 1 < data.length)
      setQuestions(data[count+1])
  }

  const handleStartAgain = () => {
    setPoint(0)
    setCount(0)
    setQuestions(data[0])
  }

  return (
    <div className='quizapp'>
      <div className='quizappButtonBack'><Button /></div>
      <div className='quizappBox'>
        {
          count < data.length - 1 ? (
            <>
              <h2 className='question'>Câu hỏi: {questions.question}</h2>
              <div className='answers'>
              {
                questions.answers.map((item,index) => (
                  <div className='answer' key={index} onClick={() => handleClickAnswer(item.isTrue)}>{item.answer}</div>
                ))
              }
              </div>
            </>
          ) : (
            <div className='end'>
              <h2>Your point: {point}/{data.length}</h2>
              <button onClick={handleStartAgain}>Start Again</button>
            </div>  
          )
        }
      </div>
    </div>
  )
}

export default QuizApp