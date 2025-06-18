import React from 'react'

function About() {
  return (
    <div style={{ backgroundColor: "#162858", color: 'white', textAlign: "center", paddingTop: "100px", paddingBottom: "100px" }}>
      <h1>About Me</h1>
      <div className='container  w-100' style={{ fontSize: "16px" }}>
        <p className='px-4 py-2'> <b>Hi, I’m Eze Paul Nwachukwu, a passionate front-end developer skilled in HTML, CSS, and JavaScript.</b> I use these tools to bring ideas to life—building clean, responsive, and interactive websites. I love solving problems through code and making my work simple, understandable, and user-friendly. Coding is my favorite way to create, and I enjoy writing beautiful, meaningful code that brings dynamic experiences to the web.</p>
        <p className='px-4 py-2'> <b>Over time, I’ve gained solid experience with powerful frameworks like React and Bootstrap.</b> They help me build faster, cleaner, and more professional websites that meet industry standards. React makes my projects fast and interactive, while Bootstrap ensures they’re responsive and accessible. Together, they help me create efficient, user-focused products that feel smooth and modern.</p>
        <p className='px-4 py-2'> <b>My journey spans 3 years of learning and 1 year of hands-on practice and real-world projects.</b> I’m constantly exploring new things and staying curious. I enjoy being part of tech communities and am always open to learning and collaborating. For me, front-end development is not just a job—it’s a passion and a continuous journey of growth.</p>
      </div>

      <a
        href="public\Eze paul Resume.pdf"
        download
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Download CV
      </a>
    </div>
  )
}

export default About