export const LinkHeader = function(props){
  return(
    <li>
      <a href={`${props.url}`} className="links">
        {props.title}
        <span className="material-symbols-outlined">{props.icon}</span>  
      </a>
    </li>
  )
}