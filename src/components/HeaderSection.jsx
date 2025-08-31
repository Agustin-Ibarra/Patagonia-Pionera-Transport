export const HeaderSection = function(porps){
  return(
    <div className="header-section-div">
      <p className="header-section-title">{porps.title}</p>
      <p className="header-section-text">{porps.description}</p>
    </div>
  )
}