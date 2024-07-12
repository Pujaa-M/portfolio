import {useRef} from 'react'
import Avatar from '../../assets/images/my-stick-figure.svg'
import Pic from '../../assets/images/me.jpeg'
import Graduate from '../../assets/images/graduate.svg'
import Creativity from '../../assets/images/creativity.svg'

const AboutComponent = () => {
    const imageSlideRef = useRef(null)
    const professionalRef = useRef(null)
    const personalRef = useRef(null)

    const addAnimation = (element) => {
        const viewHeight = window.innerHeight
        if(element) {
            let position = element.getBoundingClientRect().y
            let positionPercent = (position / viewHeight) * 100

            if(positionPercent <= 70) {
                element.classList.add('fade-in')
            }
        }
    }

    window.addEventListener("scroll", () => {
        addAnimation(professionalRef.current)
        addAnimation(personalRef.current)
    })

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
            <div className="professional" ref={professionalRef}>
                <p>
                    A <b>dedicated Software developer</b> with a <b>Bachelor's degree</b> in <b>Computer Science and Engineering</b> from <b>Mepco Schlenk Engineering College, Sivakasi</b>. I've had the opportunity to hone my skills in some latest tech stacks during my time at <b>Educational Initiatives (June 2022 - December 2023)</b>, where I contributed to building comprehensive web applications.
                </p>
                <img className="graduate-icon" src={Graduate} alt="graduate-icon"></img>
            </div>

            <div  className="personal" ref={personalRef}>
                <img src={Creativity} alt="creativity-icon"></img>
                <p>My primary <b>passion</b> lies in <b>frontend development</b>, creating intuitive and visually appealing user interfaces. Beyond my professional life, I have a strong interest in <b>digital art</b>, <b>sketching</b>, <b>crafting</b>, and <b>reading</b>, which further fuels my creativity and attention to detail in my professional projects.</p>
            </div>
        </div>
    </div>
}

export default AboutComponent