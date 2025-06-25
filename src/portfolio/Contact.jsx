import React from 'react'

function Contact() {
  return (
    <div class="container-fluid py-5" style={{ backgroundColor: "#1D2431" }} >
      <div class="row justify-content-center" style={{ paddingBottom: "150px", paddingTop: "30px" }}>
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
          <div class="card p-4" style={{ backgroundColor: "#2D3748" }} >
            <h1 style={{ borderBottom: "1px solid #F6AD55", color: "white", paddingBottom: "10px" }} >Contact Information</h1>

            <p class="text-white mb-3">
              <b>Address: </b>  Ikorodu, Lagos State, Nigeria.
            </p>

            <p class="text-white mb-3">
              <b>WhatsApp:</b> <a href="https://wa.me/2348128009525" target="_blank" rel="noopener noreferrer" class="contact-link">Chat Me On WhatsApp</a>
            </p>

            <p class="text-white mb-3">
              <b>Email:</b> <a href="mailto:Ezepaulnwachukwu@gmail.com" target="_blank" rel="noopener noreferrer" class="contact-link">Ezepaulnwachukwu@gmail.com</a>
            </p>

            <p class="text-white mb-0">
              <b>Phone:</b> <a href="tel:+2348128009525" target="_blank" rel="noopener noreferrer" class="contact-link">08128009525</a>
            </p>

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
      </div>
    </div>



  )
}

export default Contact