import React , {useState , useEffect , useContext} from "react";


export default function Play() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    
    let questions = [
        {q: '1' , 
         questionText: '𝖶𝗁𝖺𝗍 𝗂𝗌 𝗍𝗁𝖾 𝖢𝖺𝗉𝗂𝗍𝖺𝗅 𝗈𝖿 𝖢𝖺𝗇𝖺𝖽𝖺❓' , 
         answerOptions: 
         [{answerText:' Oᴛᴛᴀᴡᴀ', isCorrect: true} , 
          {answerText:'Bᴜᴇɴᴏs Aɪʀᴇs', isCorrect: false}]},

        {q: '2', 
         questionText: '𝖶𝗁𝖾𝗋𝖾 𝗂𝗌 𝖡𝖺𝗁𝗋𝖺𝗂𝗇 𝗅𝗈𝖼𝖺𝗍𝖾𝖽 ❓ ', 
         answerOptions: 
         [{answerText:'Aғʀɪᴄᴀ', isCorrect: false}, 
          {answerText:'Asɪᴀ' , isCorrect: true}]},

        {q: '3', 
         questionText: '𝗐𝗁𝗂𝖼𝗁 𝗅𝖺𝗇𝗀𝗎𝖺𝗀𝖾 𝗂𝗌 𝗌𝗉𝗈𝗄𝖾𝗇 𝗂𝗇 𝖡𝖺𝗋𝖻𝖺𝖽𝗈𝗌 ❓', 
         answerOptions: 
         [{answerText:'Eɴɢʟɪsʜ ' , isCorrect: true}, 
          {answerText:'Fʀᴇɴᴄʜ', isCorrect: false}]},

          {q: '4', 
          questionText: '𝖣𝗈 𝗒𝗈𝗎 𝗅𝗂𝗄𝖾 𝗍𝗁𝖾 𝖦𝖺𝗆𝖾 ❓', 
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
        
        (istRichtig)? alert('​​​​🎉 🇨​​​​​🇴​​​​​🇷​​​​​🇷​​​​​🇪​​​​​🇨​​​​​🇹​​​​​ 🎉'): alert('🇼​​​​​🇷​​​​​🇴​​​​​🇳​​​​​🇬​​​​​   🇦​​​​​🇳​​​​​🇸​​​​​🇼​​​​​🇪​​​​​🇷​​​​​ 😟')

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you reached the end of the quiz 🙌 \n we will start again 😃');
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
