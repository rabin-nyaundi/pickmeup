import './cardStyles.css'


function LocationCard({lat, lng}) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="location-card">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"> Location</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Latitude: {lat}</h6>
                            <p className="card-text">Longitude: {lng}</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default LocationCard
