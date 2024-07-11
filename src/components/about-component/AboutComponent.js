import {useRef} from 'react'
import Avatar from '../../assets/images/my-stick-figure.svg'
import Pic from '../../assets/images/me.jpeg'
import Graduate from '../../assets/images/graduate.svg'
import Creativity from '../../assets/images/creativity.svg'

const AboutComponent = () => {
    const imageSlideRef = useRef(null)

    const slideIn = () => {
        if(imageSlideRef.current) {
            imageSlideRef.current.scrollTo({
                left: imageSlideRef.current.scrollWidth,
                behavior: 'smooth'
            })
        }
    }

    const slideOut = () => {
        if(imageSlideRef.current) {
            imageSlideRef.current.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        }
    }

    return <div id="about" className="about">
        <h1 className='sub-heading'>ABOUT ME</h1>
        <div className="avatar">
            <div className="image-slide" onMouseEnter={slideIn} onMouseLeave={slideOut} ref={(imageSlideRef)}>
                <img className="avatar-pic" src={Avatar} alt="avatar"></img>
                <img className="my-pic" src={Pic} alt="my-picture"></img>
            </div>

            <div className="orbit"></div>

            <h3 className="name-intro">I'm Pujaa!</h3>
        </div>

        <div className='intro'>
            <div className="professional">
                <p>
                    A dedicated Software developer with a Bachelor's degree in Computer Science and Engineering from Mepco Schlenk Engineering College, Sivakasi. I have professional experience working at Educational Initiatives from June 2022 to December 2023, where I edged my skills in developing comprehensive web applications.
                </p>
                <img className="graduate-icon" src={Graduate} alt="graduate-icon"></img>
            </div>

            <div  className="personal">
                <img src={Creativity} alt="creativity-icon"></img>
                <p>My primary passion lies in frontend development, creating intuitive and visually appealing user interfaces. Beyond my professional life, I have a strong interest in digital art, sketching, crafting, and reading, which further fuels my creativity and attention to detail in my professional projects.</p>
            </div>
        </div>
    </div>
}

export default AboutComponent