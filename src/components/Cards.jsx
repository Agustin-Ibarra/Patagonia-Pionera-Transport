export const Card = function(props){
  return(
    <div className="card">
      <img src={props.imageUrl} alt={props.alt} className="card-img"/>
      <div className="card-text-div">
        <h3 className="card-title">{props.serviceTitle}</h3>
        <p className="card-description">{props.serviceDescription}</p>
      </div>
    </div>
  )
}