import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


function Home() {

    const [Loading, setLoading] = React.useState(false)
    useEffect(() => {
        setInterval(() => {
            setLoading(true)

        }, 2000)
    }, [])

    return (
        <div style={{ backgroundColor: "#172A60", height: "100%"}}>

            {Loading ? (
                <div>
                    <section className="py-5" style={{ backgroundColor: "#1A202C", color: "white" }}>
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center text-lg-start">

                                {/* PROFILE IMAGE */}
                                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 d-flex justify-content-center">
                                    <img
                                        src={require("../images/paulimage-removebg-preview.png")}
                                        alt="Eze Paul Nwachukwu"
                                        style={{
                                            border: "8px solid white",
                                            borderRadius: "50%",
                                            width: "250px",
                                            maxWidth: "100%",
                                            height: "auto"
                                        }}
                                    />
                                </div>

                                {/* TEXT & BUTTONS */}
                                <div className="col-lg-6 col-md-10">
                                    <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                                        Hi, I'm <span style={{ color: "#F6AD55" }}>Eze Paul Nwachukwu</span>
                                    </h1>
                                    <h5 className="mb-4">Front-End Developer | React Enthusiast</h5>

                                    <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                                        <Link to="/contact" className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill">
                                            Hire Me
                                        </Link>
                                        <a
                                            className="btn btn-outline-light fw-bold px-4 py-2 rounded-pill"
                                            href="https://www.canva.com/design/DAGqbqzSDzw/ufIrnIWVLl5kNRMcBWelLg/view?utm_content=DAGqbqzSDzw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7160b9f3d2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View My Resume
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>




                    <section className="py-5" style={{ backgroundColor: "#2D3748", color: "white" }}>
                        <div className="container">

                            {/* Heading */}
                            <h2 className="text-center fw-bold pb-3 mb-4" style={{ borderBottom: "2px solid #F6AD55", color: "#E65C2F" }}>
                                My Working Tools
                            </h2>

                            {/* Tools List */}
                            <div className="row justify-content-center text-start">
                                <div className="col-md-6 col-sm-12 mb-4">
                                    <ul style={{ lineHeight: "2", listStyleType: "disc", paddingLeft: "1.2rem" }}>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Redux (State Management)</li>
                                        <li>Bootstrap</li>
                                        <li>Responsive Design (Media Queries, Mobile-first)</li>
                                        <li>RESTful APIs (Fetch / Axios)</li>
                                        <li>React Router</li>
                                        <li>Formik (Form Handling)</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-4">
                                    <ul style={{ lineHeight: "2", listStyleType: "disc", paddingLeft: "1.2rem" }}>
                                        <li>Git & GitHub</li>
                                        <li>JSON (Data Handling)</li>
                                        <li>npm (Package Management)</li>
                                        <li>Chrome DevTools (Debugging)</li>
                                        <li>VS Code (Code Editor)</li>
                                        <li>Custom Button & UI Event Handling</li>
                                        <li>Image/Asset Management in React</li>
                                        <li>File Handling (PDF Download)</li>
                                        <li>Scrollspy & Navigation Enhancements</li>
                                        <li>Component-based Architecture</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="text-center mt-5">
                                <p className="fw-bold mb-4" style={{ borderBottom: "1px solid #F6AD55", color: "#E65C2F", paddingBottom: "10px" }}>
                                    Want to connect and interact on social media? Follow me:
                                </p>
                                <div className="d-flex justify-content-center gap-4">
                                    <a href="https://github.com/EzePaulNwachukwu" target="_blank" rel="noopener noreferrer">
                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" style={{ width: "40px" }} />
                                    </a>
                                    <a href="https://x.com/soul_eze?s=21" target="_blank" rel="noopener noreferrer">
                                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="X" style={{ width: "40px" }} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/eze-paul-nwachukwu-37a36b279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: "40px" }} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>


            ) : (


                <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-center">
                    {/* Spinner Animation */}
                    <div className="d-flex justify-content-center gap-4 mb-4">
                        <div
                            className="spinner-border"
                            style={{ width: "4rem", height: "4rem", color: "#E65C2F" }}
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow"
                            style={{ width: "4rem", height: "4rem", color: "#E65C2F" }}
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    {/* Optional Loading Text */}
                    <h5 className="text-white">Please wait... </h5>
                </div>
            )}

        </div >
    )

}

    export default Home