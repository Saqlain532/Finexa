import React from 'react'

const Team = () => {
  return (
    <div className='container mt-5 responsive-mode-text'  >
      <div className='row shadow border rounded-4 p-lg-5 p-3'>
           <h3 className='text-muted fw-bold text-center'>Founder & Developer</h3>
           <div className='border-top'></div>
           <div className='row d-flex mt-lg-3 '>
                <div className='col-lg-6 col-12 p-2 text-center'>
                     <img src='media/images/image.png' alt='developres-pic' 
                          className='border rounded-circle '
                          style={{width:"40%"}}
                     />
                     <h4 className='mt-3 text-muted'>Saqlain Mustaque Ansari</h4>
                     <p className='text-secondary fw-semibold'>Developer</p>
                     <p className='text-muted fs-5'>
                        <a href='https://github.com/Saqlain532'
                        className='mx-2'
                        ><i class="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/saqlain-mustaque-790029330/'><i class="fa-brands fa-linkedin-in"></i></a>
                     </p>
                     
                </div>
                <div className='col-lg-6 col-12 p-2'>
                     <p>Saqlain Mustaque Ansari founded Finexa with a vision to make investing and financial technology more accessible, transparent, and user-friendly for everyone.</p>
                     <p>Currently pursuing a degree in Information Technology, he is passionate about software engineering, financial technology, and building products that solve real-world problems. Finexa began as a project driven by curiosity, innovation, and the desire to create a modern platform that simplifies investing and trading experiences.</p>
                     <p>Beyond development, Saqlain is continuously learning new technologies, exploring full-stack development, and working toward building impactful software products. His long-term goal is to create technology that empowers people to make smarter financial decisions.</p>
                </div>
           </div>    
      </div>
     
    </div>
  )
}

export default Team
