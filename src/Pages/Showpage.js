import { useParams } from "react-router-dom"
import { getShowByID } from "../helpers/showHelper"
function Showpage() {
    const params= useParams()
    const show = getShowByID(params.showId)
    return (
        <div className="ShowPage">
            <h1>{show.name}</h1>
            <img src={show.image.medium}/>
            <h2>Language:{show.language}</h2>
            <h3>Rating:{show.rating.average}</h3>
            <h4>Genres:{show.genres.filter}</h4>

        </div>
    )

}
export default Showpage