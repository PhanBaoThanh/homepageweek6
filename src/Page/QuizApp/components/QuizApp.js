import React,{useState} from 'react'
import './quizapp.scss'
import Button from '../../Button/Button'

const QuizApp = () => {
  const data = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
  const [answers,setAnswers] = useState([])

  const handleClickAnswer = check => {
    setCount(prev => prev + 1)
    if(count + 1 < data.length)
      setQuestions(data[count+1])


    if(answers.find(item => item.id === questions.id)){
      setAnswers(prev => prev.map(item => {
        if(item.id === questions.id){
          if(!check.isTrue && item.isTrue)
            setPoint(prev => prev - 1)
          else if(check.isTrue && !item.isTrue)
            setPoint(prev => prev + 1)
          return {
              ...item,
              answer: check.answer
            }
        }
        return item
      }))
    }

    else{
      if(check.isTrue)
        setPoint(prev => prev + 1)
      setAnswers(prev => [
        ...prev,
        {
          id: questions.id,
          answer: check.answer,
          isTrue: check.isTrue
        }
      ])
    }
  }

  const handleStartAgain = () => {
    setPoint(0)
    setCount(0)
    setQuestions(data[0])
    setAnswers([])
  }

  const handleClickPrevBtn = () => {
    if(count > 0){
      setCount(prev => prev - 1)
      setQuestions(data[count - 1])
    }

  }

  const handleClickNextBtn = () => {
    if(count < data.length - 1){
      setCount(prev => prev + 1)
      setQuestions(data[count + 1])
    }
  }
 
  return (
    <div className='quizapp'>
      <div className='quizappButtonBack'><Button /></div>
      <div className='quizappBox'>
        {
          answers.length < data.length ? (
            <>
              <div className='questionBox'>
                <h2 className='question'>Câu hỏi: {questions.question}</h2>
                <p className='countQuestion'>{count+1}/{data.length}</p>
              </div>
              <div className='answers'>
              {
                questions.answers.map((item,index) => (
                  <div className={`answer ${answers.find(i => i.answer === item.answer && i.id === questions.id) ? 'isCheck' : ''}`} key={index} onClick={() => handleClickAnswer(item)}>{item.answer}</div>
                ))
              }
              </div>
              <div className='btns'>
                <div className={`btn ${count === 0 ? 'disable' : ''}`} onClick={handleClickPrevBtn}>Prev</div>
                <div className={`btn ${count === data.length - 1 ? 'disable' : ''}`} onClick={handleClickNextBtn}>Next</div>
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