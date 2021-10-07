import './buttonStyle.css'


function Button({lat, lng, text, onClick}) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="button-component">
                        <button
                            onClick={onClick}
                            type="button"
                            className="btn btn-dark findMe"
                            lat ={lat}
                            lng={lng}
                            >
                            {text}
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Button
