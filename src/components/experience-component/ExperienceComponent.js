import AccordianComponent from "../shared/accordian-component/AccordianComponent"
import { ExpList } from "../../assets/json/experience"

const ExperienceComponent = () => {
    return <div id="experience" className="experience">
        <h1 className="sub-heading">PROFESSIONAL EXPERIENCE</h1>

        <div className="experience-list">
            {
                ExpList.map((exp, id) => <AccordianComponent key={id} company={exp.company} logo={exp.logo} 
                role={exp.role} timeline={exp.timeline} summary={exp.summary}/>)
            }
        </div>
    </div>
}

export default ExperienceComponent