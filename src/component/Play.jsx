import React , {useState , useEffect , useContext} from "react";


export default function Play() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    
    let questions = [
        {q: '1' , 
         questionText: '๐ถ๐๐บ๐ ๐๐ ๐๐๐พ ๐ข๐บ๐๐๐๐บ๐ ๐๐ฟ ๐ข๐บ๐๐บ๐ฝ๐บโ' , 
         answerOptions: 
         [{answerText:' Oแดแดแดแดกแด', isCorrect: true} , 
          {answerText:'Bแดแดษดแดs Aษชสแดs', isCorrect: false}]},

        {q: '2', 
         questionText: '๐ถ๐๐พ๐๐พ ๐๐ ๐ก๐บ๐๐๐บ๐๐ ๐๐๐ผ๐บ๐๐พ๐ฝ โ ', 
         answerOptions: 
         [{answerText:'Aาสษชแดแด', isCorrect: false}, 
          {answerText:'Asษชแด' , isCorrect: true}]},

        {q: '3', 
         questionText: '๐๐๐๐ผ๐ ๐๐บ๐๐๐๐บ๐๐พ ๐๐ ๐๐๐๐๐พ๐ ๐๐ ๐ก๐บ๐๐ป๐บ๐ฝ๐๐ โ', 
         answerOptions: 
         [{answerText:'Eษดษขสษชsส ' , isCorrect: true}, 
          {answerText:'Fสแดษดแดส', isCorrect: false}]},

          {q: '4', 
          questionText: '๐ฃ๐ ๐๐๐ ๐๐๐๐พ ๐๐๐พ ๐ฆ๐บ๐๐พ โ', 
          answerOptions: 
          [{answerText:'yes ' , isCorrect: true}, 
           {answerText:'Sure', isCorrect: true}]}
    ]

    let istRichtig = questions[currentQuestion].answerOptions.map(e=>{
                      return(e.isCorrect) 
                    })

    const handleAnswerButtonClick = (answerOption) => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        
        (istRichtig)? alert('โโโโ๐ ๐จโโโโโ๐ดโโโโโ๐ทโโโโโ๐ทโโโโโ๐ชโโโโโ๐จโโโโโ๐นโโโโโ ๐'): alert('๐ผโโโโโ๐ทโโโโโ๐ดโโโโโ๐ณโโโโโ๐ฌโโโโโ   ๐ฆโโโโโ๐ณโโโโโ๐ธโโโโโ๐ผโโโโโ๐ชโโโโโ๐ทโโโโโ ๐')

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you reached the end of the quiz ๐ \n we will start again ๐');
            setCurrentQuestion(0)
        }
        
        
    };

  return (
    <div className="home-items my-5 p-5 border display-6 text-secondary">
        <div className='question-text'>{questions[currentQuestion].questionText}</div>

        <div className='answer-section' >
	        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
		        <button className="btn btn-warning m-3" key={Math.random()}
                    onClick={()=>
                    handleAnswerButtonClick(answerOption.isCorrect)}>
                    {answerOption.answerText}</button>))}
        </div>

    </div>
  )
}
