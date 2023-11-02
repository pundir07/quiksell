import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-black'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "95%", height : "95%",  borderRadius : "50%" }}  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="UserImage" />
                
                <div className="showStatus"></div>
                
            </div>
            
        </div>
        
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-black"> ... </div>
            {
                tag?.map((flem, index) => {
                    return <div key={index} className="tags color-black"> <span>.</span> {flem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;