import React from 'react'
import SkillItem from './SkillItem'

const SkillsSet = (props) => {
    const {title, skillsArray} = props.skillSet
    return (
        <div className="hard">
              <h3 className="hard-title">{title}</h3>
              <div className="hard-chart">
                {
                    skillsArray.map((el) => <SkillItem skillData={el}/>
                    )
                }
              </div>
            </div>
    )
}

export default SkillsSet
