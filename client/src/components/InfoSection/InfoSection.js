import './InfoSection.css'

const InfoSection = (props) => {
    return (
        <div className='section'>
            <h3>{props.title}</h3>
            <div className='line'>
            </div>
            <p>{props.content}</p>
        </div>
    )
}

export default InfoSection
