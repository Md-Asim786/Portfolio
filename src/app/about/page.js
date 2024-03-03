import './about.css'
import Image from 'next/image'
import AboutImage from "../Images/about.jpeg"
import Link from 'next/link'
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p className='aboutP'>My introduction</p>
      <div className='main-div'>
        <div className='side-image'><Image src={AboutImage} alt="404"></Image></div>
        <div className='side-div'>
          <div className='about-content'><p>Web developer, with extensive Knowledge and years of experience, working in web technologies and UI / UX design, delivering quality of work.</p></div>
          <div className='ex-div'>
            <div className='box'>
              <h1>06+</h1>
              <p>Months</p>
              <p>experience</p>
            </div>
            <div className='box'>
              <h1>10+</h1>
              <p>Completed</p>
              <p>project</p>
            </div>
            <div className='box'>
              <h1>00+</h1>
              <p>Companies</p>
              <p>worked</p>
            </div>
          </div>
          <button className='btn'><Link className='btnbtn' href={'./Asim.pdf'} target="_blank" rel="noopener noreferrer" locale={false} download>Download CV</Link></button>
        </div>
      </div>
    </div>
  )
}
export default About





