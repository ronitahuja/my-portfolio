import {BrowserRouter} from 'react-router-dom'
import {Contact,Experience,
  Feedbacks,Navbar,StarsCanvas,Footer} from '../components'
import {Mobilehero,Mobileabout,Mobilework,Mobiletech} from '../mobile'

function Mobile() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Mobilehero />
        </div>
        <Mobileabout />
        {/* <Experience /> */}
        <Mobiletech />
        <Mobilework />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Mobile
