import { Link , Redirect} from "react-router-dom";
import "./carousel.css";


export default function Index(props) {
    return (
        <div>
            {!props.isLogin ? <Redirect/> : null}
            <header role="banner">
                <div className="collapse bg-light" id="collapseSearch">
                    <div className="container py-3">
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </header>
            <main role="main">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div style={{background:"rgb(119, 119, 119)"}} class="carousel-inner p-4">
                        <div class="carousel-item active">
                            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=" :  " preserveAspectRatio="xMidYMid slice" focusable="false"><title> </title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em" class="font-weight-bold"> </text></svg>
                            <div class="container">
                                <div class="carousel-caption text-left">
                                    <h1>Example headline.</h1>
                                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                                    <p><a class="btn btn-lg btn-primary" href="/home/55">Sign up today</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=" :  " preserveAspectRatio="xMidYMid slice" focusable="false"><title> </title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em" class="font-weight-bold"> </text></svg>

                            <div class="container">
                                <div class="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                                    <p><a class="btn btn-lg btn-primary" href="/home/55">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=" :  " preserveAspectRatio="xMidYMid slice" focusable="false"><title> </title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em" class="font-weight-bold"> </text></svg>

                            <div class="container">
                                <div class="carousel-caption text-right">
                                    <h1>One more for good measure.</h1>
                                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                                    <p><a class="btn btn-lg btn-primary" href="/home/55">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div className="bg-light pt-5 pb-3">
                    <div className="container">
                        <div className="container">
                            <div >
                                <div className="d-flex mb-3">
                                    <h2 className="m-0">Second carousel row</h2>
                                    <Link to="#" className="btn btn-secondary ml-auto">Read more<span className="sr-only"> about the module XXXX</span></Link>
                                </div>
                                <div className="row  ">
                                    <div className="col-4">
                                        <div className="card border">
                                            <img src="images/discovery.svg" alt="" className="card-img-top bg-yellow" width="416" height="229" loading="lazy" />
                                            <div className="card-body position-static">
                                                <h3 className="card-title mb-2">Insert your body text in here</h3>
                                                <p className="card-text mb-3" lang="zxx">
                                                    Ommoditatur sendand amusanti nobisci psandae dolupta tatur, con corrum sam fugitatiunt aliae
                                                    pa doluptatur sit aut alite excerei ctasimin.
                                               </p>
                                                <Link to="#" className="btn btn-primary">Find out more<span className="sr-only">&nbsp;about the TITLE OF THE INSIGHT</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="card border">
                                            <img src="images/discovery.svg" alt="" className="card-img-top bg-yellow" width="416" height="229" loading="lazy" />
                                            <div className="card-body position-static">
                                                <h3 className="card-title mb-2">Insert your body text in here</h3>
                                                <p className="card-text mb-3" lang="zxx">
                                                    Ommoditatur sendand amusanti nobisci psandae dolupta tatur, con corrum sam fugitatiunt aliae
                                                    pa doluptatur sit aut alite excerei ctasimin.
                                                 </p>
                                                <Link to="#" className="btn btn-primary">Find out more<span className="sr-only">&nbsp;about the TITLE OF THE INSIGHT</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="card border">
                                            <img src="images/discovery.svg" alt="" className="card-img-top bg-yellow" width="416" height="229" loading="lazy" />
                                            <div className="card-body position-static">
                                                <h3 className="card-title mb-2">Insert your body text in here</h3>
                                                <p className="card-text mb-3" lang="zxx">
                                                    Ommoditatur sendand amusanti nobisci psandae dolupta tatur, con corrum sam fugitatiunt aliae
                                                    pa doluptatur sit aut alite excerei ctasimin.
                                               </p>
                                                <Link to="#" className="btn btn-primary">Find out more<span className="sr-only">&nbsp;about the TITLE OF THE INSIGHT</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popular-services p-5">
                    <div className="container">
                        <div className="d-flex mb-3">
                            <h2 className="mb-0">Announcement</h2>
                            <Link to="#" className="btn btn-secondary ml-auto">See more<span className="sr-only">&nbsp;the popular services</span></Link>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <img className="col-12 col-lg-4" src="images/popular-services-1.png" alt="" width="416" height="322" loading="lazy" />
                                    <div className="col justify-content-between d-inline-flex flex-column">
                                        <div>
                                        <h2 className="card-title">Insert your body text in here</h2>
                                        <p className="card-text" lang="zxx">
                                            Ommoditatur sendand amusanti nobisci psandae dolupta tatur, con corrum sam
                                            fugitatiunt aliae pa doluptatur sit aut alite excerei ctasimin.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum et aliquam, cupiditate accusantium quos illo blanditiis cum necessitatibus reprehenderit nam in cumque dolores sit tempore animi perspiciatis exercitationem eligendi!
                                        </p>
                                        </div>
                                        <div className="align-self-end p-2">
                                        <Link to="#" className="btn btn-primary ">Learn More</Link>
                                        </div>                                  
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}