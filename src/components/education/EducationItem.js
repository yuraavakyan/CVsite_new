import React from 'react'

const EducationItem = (props) => {

    const {logos, logoTitle, description, years} = props.educationData;
    const {index} = props;

    return (
        <div className={`${index % 2 === 0 ? "educationItem" : "educationItem-reverse"}`} data-aos="fade-left" once="false">
        <div className={`${index % 2 === 0 ? "item-container": "item-container-rev"}`}>
          <div className="logo-part">
            <p className="item-title">{logoTitle}</p>
            <div className="item-logo ">
                {
                    logos.map((el) => {
                        return <img src={el} alt=""/>
                    })
                }
            </div>
          </div>
          <div className="text-part">
            <p className="text">
              <div>{years}</div>
              <div>{description}</div>
            </p>
          </div>
        </div>
      </div>
    )
}

export default EducationItem
