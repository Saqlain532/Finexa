import React from 'react'
import '../home/home.css'
const Hero = () => {
  return (
    <div className='container mt-5 responsive-mode-text' 
       
     >
      <div className='row shadow border rounded-4 p-lg-5 p-3'
           style={{backgroundColor:"#f7f7f5"}}
      >
           <h3 className='text-muted fw-bold text-center'>We pioneered the discount broking model in India.<br/>
               Now, we are breaking ground with our technology.</h3>
           <div className='border-top'></div>
           <div className='row d-flex mt-lg-3 '>
                <div className='col-lg-6 col-12 p-2'>
                     <p>Finexa was founded with a simple vision — to make investing and trading accessible, transparent, and technology-driven for everyone. From day one, our mission has been to remove the complexities that often prevent individuals from participating confidently in the financial markets.</p>
                     <p>At Finexa, we combine innovative technology, user-friendly platforms, and reliable support to create a seamless investing experience. Whether you're a first-time investor or an active trader, our ecosystem is designed to help you manage, grow, and monitor your investments with ease.</p>
                     <p>Our platform provides access to market insights, advanced trading tools, and secure investment solutions, empowering users to make informed financial decisions. We believe that great technology should simplify investing, not complicate it.</p>
                </div>
                <div className='col-lg-6 col-12 p-2'>
                     <p>Beyond trading and investing, Finexa is committed to promoting financial awareness and education. Through educational resources, market updates, and community initiatives, we aim to help individuals build long-term financial confidence.</p>
                     <p>As we continue to grow, innovation remains at the heart of everything we do. Every day, we work toward building smarter financial solutions that make wealth creation more accessible for the next generation of investors.</p>
                     <p>The journey has only just begun, and Finexa is constantly evolving to shape the future of investing.</p>
                </div>
           </div>    
      </div>
     
    </div>
  )
}

export default Hero
