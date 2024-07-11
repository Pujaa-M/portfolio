import GithubLogo from '../../assets/images/github-logo.svg'
import CodePenLogo from '../../assets/images/codepen-logo.svg'
import CardComponent from '../shared/card-component/CardComponent'
import { GithubProjects } from '../../assets/json/github'
import { CodepenProjects } from '../../assets/json/codepen'
import CardDescClip from '../clip-masks/CardDescClip'
import CardLinkClip from '../clip-masks/CardLinkClip'

const ProjectsComponent = () => {
    return <div id="project" className="projects">
        <h1 className="sub-heading">PROJECTS</h1>
        <div className="project-categories">
            <div className="category">
                <div className="category-heading">
                    <img className="category-icon" src={GithubLogo} alt="logo"></img>
                    <p className="category-name">Github</p>
                    <div className="border"></div>
                </div>

                <div className="cards">
                    {
                        GithubProjects.map((project, id) => <CardComponent key={id} link={project.link} url={project.url} thumbnail={project.thumbnail} desc={project.desc}/>)
                    }
                </div>
            </div>

            <div className="category">
                <div className="category-heading">
                    <img className="category-icon" src={CodePenLogo} alt="logo"></img>
                    <p className="category-name">Codepen</p>
                    <div className="border"></div>
                </div>

                <div className="cards">
                    {
                        CodepenProjects.map((project, id) => <CardComponent key={id} link={project.link} url={project.url} thumbnail={project.thumbnail} desc={project.desc}/>)
                    }
                </div>

                <a href="https://codepen.io/Pujaa-M" target="_blank" rel="noreferrer" className="more">more...</a>
            </div>
        </div>

        <CardDescClip />
        <CardLinkClip />
    </div>
}

export default ProjectsComponent