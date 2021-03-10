import React from 'react';

function Movie(props) {



    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    props.Poster === 'N/A' ? <img className="activator" src={'https://via.placeholder.com/300x300.png?text=No+Image'} /> : <img className="activator" src={props.Poster} />
                }

            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.Title}</span>
                <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>);
}

export { Movie };
