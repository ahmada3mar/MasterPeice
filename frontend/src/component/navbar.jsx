



export default function Navbar() {

    return (

        <nav role="navigation" className="navbar navbar-expand-lg navbar-dark p-2">
            <a className="navbar-brand" href="/home">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/homenavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {/* Boosted mod: active class on link */}
                        <a className="nav-link active" href="/home" aria-current="page">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/home">Action</a>
                            <a className="dropdown-item" href="/home">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="/home">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/home" tabIndex={-1} aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-secondary btn-inverse my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}
