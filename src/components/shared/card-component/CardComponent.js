import ArrowUpRight from '../../../assets/images/arrow-up-right.svg'

const CardComponent =({thumbnail, link, url, desc}) => {
    return <div className="card">
        <div className="card-display">
            <img className="card-image" src={thumbnail} alt="thumbnail"></img>

            <a href={url} target="_blank" rel="noreferrer"><div className="card-link">
                <p className="link">{link}</p>
                <img className="arrow-up-right" src={ArrowUpRight} alt="arrow-to-link"></img>
            </div></a>

            <div className="tint"></div>
        </div>
        
        <div className="card-desc">
            <p>{desc}</p>
        </div>
    </div>
}

export default CardComponent