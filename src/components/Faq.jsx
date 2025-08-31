export const Faq = function(props){
  return(
    <div className="faq-div">
      <p className="ask">{props.ask}</p>
      <p className="answer">{props.answer}</p>
    </div>
  )
}