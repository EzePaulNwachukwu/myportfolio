import React from 'react'

function About() {
  return (
    <div style={{ backgroundColor: "#162858", color: 'white', textAlign: "left", paddingTop: "50px", paddingBottom: "100px" }}>
      <section id="about" className="about-section" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Hi, I’m <strong>Eze Paul Nwachukwu</strong>, a passionate front-end developer with a focus on building clean, responsive,
          and user-friendly web applications. I’m currently a <strong>Computer Science student at Lagos State University (LASU)</strong>,
          where I continue to strengthen my understanding of software development and technology.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Over the past few years, I’ve dedicated myself to learning and building in the front-end space. I received over
          <strong> 2 years of practical, hands-on training</strong> at <strong>Creative Digita Technologies</strong>, a tech training center
          that shaped my development journey and gave me real-world exposure to professional development tools, workflows, and best practices.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          I’ve worked with modern technologies such as:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>HTML, CSS (Vanilla, Tailwind, Bootstrap)</li>
          <li>JavaScript, React, and Next.js</li>
          <li>Redux for global state management</li>
          <li>Recharts for building dashboards and charts</li>
          <li>Git & GitHub for version control and collaboration</li>
        </ul>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          I’ve built real-world projects including a <strong>FinTech web app</strong> to manage user expenses and a
          <strong> real estate platform</strong> with dynamic routing and listings. I also enjoy creating interactive games
          and calculators that test logic and improve user engagement.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          What drives me is not just writing code—but using code to solve real problems, improve user experience, and bring ideas
          to life on the web. I love building interfaces that are both functional and visually appealing, and I take pride in
          writing clean, maintainable code.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          I’m actively seeking opportunities to grow and contribute in environments that value innovation, collaboration, and
          learning—especially in industries like <strong>FinTech</strong>, <strong>HealthTech</strong>, or <strong>Crypto</strong>.
          Whether it’s a junior developer role, internship, or freelance opportunity, I’m ready to bring energy, skill, and a
          growth mindset to the team.
        </p>
      </section>

      <div className='text-center pt-5'>
        <a
          href="/EzepaulResume.pdf"
          download

          className='resumebtn '
        >
          Download CV
        </a>
      </div>


      <div className='col-lg-5 col-sm-10 col-md-10 m-auto my-5 text-white text-center'>

        <p className="my-5" style={{ borderBottom: "1px solid #F6AD55", color: "#E65C2F", paddingBottom: "10px" }}>Want to connect and interact on social madia, Follow me</p>
        <div className='d-flex justify-content-between m-auto  w-50 text-white social'>
          <a href="https://github.com/EzePaulNwachukwu" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
          </a>


          <a href="https://x.com/soul_eze?s=21" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="X" />
          </a>

          <a href="https://www.linkedin.com/in/eze-paul-nwachukwu-37a36b279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>

        </div>
      </div>


    </div>
  )
}

export default About