import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect} from 'react'


function Home() {

    const [Loading, setLoading] = React.useState(false)
    useEffect(() => {
        setInterval(() => {
            setLoading(true)

        }, 2000)
    }, [])

    return (
        <div style={{ backgroundColor: "#172A60", paddingTop: "100px", paddingBottom: "200px" }}>

            {Loading ? (<div className='row container  m-auto  justify-content-between'>
                <div className=' text-white col-lg-5 col-sm-12 m-auto'>
                    <h1 className='myname'>Hi, I'm <Link >Eze Paul Nwachukwu</Link> </h1>
                    <h5>Front-end Developer | React Enthusiast</h5>

                    <div style={{ display: "flex", justifyContent: "left", gap: "20px", marginTop: "30px" }}>
                      <Link to={"/contact"} className='hirebtn'>Hire Me</Link> 
                        <a className='resumebtna' href="https://www.canva.com/design/DAGqbqzSDzw/ufIrnIWVLl5kNRMcBWelLg/view?utm_content=DAGqbqzSDzw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7160b9f3d2" target='_blank' rel="noopener noreferrer">
                            <button className='resumebtn' >View My Resume</button>
                        </a>
                    </div>
                </div>
                <div className='col-lg-5 col-sm-12'>
                    <div style={{ width: "50%", margin: "auto", marginTop: "100px" }}>
                        <div class="spinner-border" style={{ width: "5rem", height: "5rem", color: "#E65C2F" }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow" style={{ width: "5rem", height: "5rem", color: "#E65C2F" }} role="status">
                            <span class="visually-hidden" style={{ color: "#E65C2F" }}>Loading...</span>
                        </div>
                    </div>

                </div>
            </div>) : (<div className='col-lg-5 col-sm-12'>
                <div style={{ width: "50%", margin: "auto", marginTop: "100px", padding:"100px" }}>
                    <div class="spinner-border" style={{ width: "5rem", height: "5rem", color: "#E65C2F" }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow" style={{ width: "5rem", height: "5rem", color: "#E65C2F" }} role="status">
                        <span class="visually-hidden" style={{ color: "#E65C2F" }}>Loading...</span>
                    </div>
                </div>

            </div>)}



        </div>
    )
}

export default Home