import GithubLogo from '../../assets/images/github-logo.svg'
import LinkedinLogo from '../../assets/images/linkedin-logo.svg'
import CodepenLogo from '../../assets/images/codepen-logo.svg'
import DevLogo from '../../assets/images/dev-logo.svg'
import GithubLogo2 from '../../assets/images/github-logo-2.svg'
import LinkedinLogo2 from '../../assets/images/linkedin-logo-2.svg'
import CodepenLogo2 from '../../assets/images/codepen-logo-2.svg'
import DevLogo2 from '../../assets/images/dev-logo-2.svg'
import { useRef } from 'react'

const ProfileComponent = () => {
    const githubRef = useRef(null)
    const linkedinRef = useRef(null)
    const codepenRef = useRef(null)
    const devRef = useRef(null)

    const changeImage = (ref, image) => {
        if(ref.current) {
            ref.current.src = image
        }
    }

    return <div className="profile">
        <a target="_blank" rel="noreferrer" href="https://github.com/Pujaa-M"><img onMouseEnter={() => {changeImage(githubRef, GithubLogo)}} onMouseLeave={() => {changeImage(githubRef, GithubLogo2)}} src={GithubLogo2} alt="logo" ref={githubRef}></img></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pujaam/"><img onMouseEnter={() => {changeImage(linkedinRef, LinkedinLogo)}} onMouseLeave={() => {changeImage(linkedinRef, LinkedinLogo2)}} src={LinkedinLogo2} alt="logo" ref={linkedinRef}></img></a>
        <a target="_blank" rel="noreferrer" href="https://codepen.io/Pujaa-M"><img onMouseEnter={() => {changeImage(codepenRef, CodepenLogo)}} onMouseLeave={() => {changeImage(codepenRef, CodepenLogo2)}} src={CodepenLogo2} alt="logo" ref={codepenRef}></img></a>
        <a target="_blank" rel="noreferrer" href="https://dev.to/pujaam"><img onMouseEnter={() => {changeImage(devRef, DevLogo)}} onMouseLeave={() => {changeImage(devRef, DevLogo2)}} src={DevLogo2} alt="logo" ref={devRef}></img></a>
    </div>
}

export default ProfileComponent