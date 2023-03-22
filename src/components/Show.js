import { Link } from "react-router-dom"

function Show(props) {
  return (
    <Link to={"/pages/showpage/"+props.showObject.id}>
      <div className='Show'>
        <img className='Show-image' src={props.showObject.image.medium}
          alt={props.showObject.name} />

        <h2>{props.showObject.name}</h2>

      </div>
    </Link>
  

  )
}

export default Show