import Logo from '../../assets/images/logo.svg'
import GearBig from '../../assets/images/gear-big.svg'
import GearSmall from '../../assets/images/gear-small.svg'
import ChipComponent from '../shared/chip-component/ChipComponent'
import CodeSnippet1 from '../../assets/images/code-snippet.PNG'
import CodeSnippet2 from '../../assets/images/code-snippet-2.PNG'
import EmailIcon from '../../assets/images/email-icon.svg'
import PhoneIcon from '../../assets/images/phone-icon.svg'
import GmailLogo from '../../assets/images/gmail-logo.svg'

const HomeComponent = () => {
    let skills = ['Angular', 'ReactJS', 'HTML', 'CSS', 'SCSS', 'Javascript', 'Typescript', 'PHP', 'MongoDB', 'Elasticsearch']
    let contacts = [{email: {name: 'pujaa1201@gmail.com', icon: EmailIcon}}, {phone: {name: '+917904529064', icon: PhoneIcon}}]

    const openMail = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=pujaa1201@gmail.com', '_blank')
    }

    return <div className="home-page">
        <div className="navigation">
            <ul className="navigation-list">
                <li><a href="#about">
                    <div className="navigate-to">
                        <p>About</p>
                        <div className="underline"></div>
                    </div>   
                </a></li>
                <li><a href="#experience">
                    <div className="navigate-to">
                        <p>Experience</p>
                        <div className="underline"></div>
                    </div>
                </a></li>
                <li><a href="#project">
                    <div className="navigate-to">
                        <p>Projects</p>
                        <div className="underline"></div>
                    </div>
                </a></li>
            </ul>
        </div>
        <div className="title">
            <div className="logo">
                <img className="dev" src={Logo} alt="logo"></img>
                <img className="gear-big" src={GearBig} alt="gear-big"></img>
                <img className="gear-small" src={GearSmall} alt="gear-small"></img>
            </div>

            <div className="heading">
                <h1 className="designation">SOFTWARE DEVELOPER</h1>
                <h3 className="other-desig">FULL-STACK DEVELOPMENT | FRONTEND DEVELOPMENT</h3>
                <div className="skills">
                    {skills.map((skill, id) => <ChipComponent key={id} context={skill}/>)}
                </div>
            </div>
        </div>

        <img className="code-snippet-1" src={CodeSnippet1} alt=""></img>
        <img className="code-snippet-2" src={CodeSnippet2} alt=""></img>

        <div className="contacts">
            {
                contacts.map((contact, index) => 
                <div key={index} className={Object.keys(contact)}>
                    <img className="icon" src={contacts[index][Object.keys(contact)].icon} alt="icon"></img>
                    <p className="name">{contacts[index][Object.keys(contact)].name}</p>
                </div>)
            }
        </div>

        <div className="gmail" onClick={openMail}><img className="gmail-logo" src={GmailLogo} alt="gmail"></img></div>
    </div>
}

export default HomeComponent