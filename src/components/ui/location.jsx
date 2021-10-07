
import { mylocationStyle } from "./locationStyle"

function LocationPointer({text, lat, lng}) {


    return (
        <div style={mylocationStyle}>
            {text}
        </div>
    )
}

export default LocationPointer
