import Arrow from '../../../assets/images/arrow.svg'

const AccordianComponent = ({logo, company, role, timeline, summary}) => {
    return <div className="accordian-container">
        <div className="accordian-heading">
            <img className="accordian-logo" src={logo} alt="logo"></img>
            <h2 className="accordian-title">{company}</h2>
            <input id="open-check" type="checkbox"></input>
            <label for="open-check"><img className="accordian-arrow" src={Arrow} alt="arrow"></img></label>
        </div>

        <div className="info">
            <div className="role-time">
                <h3 className="role">{role}</h3>
                <h3 className="timeline">{timeline}</h3>
            </div>
            <p className="summary">{summary}</p>
        </div>
    </div>
}

export default AccordianComponent