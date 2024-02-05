import React from 'react'
import { Link } from 'react-router-dom';

export const HomeSection = ({title,image,description,link,color}) => {
  return (
    <div className='homeSection' style={{backgroundColor : color}}>
        <img src={`${image}`} alt="" />
        <div className="homeSectionItem">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link}><button>{title}</button></Link>
        </div>
    </div>
  )
}
export default HomeSection;