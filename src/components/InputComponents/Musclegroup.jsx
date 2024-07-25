import React from 'react'
import { Wrapper } from '../../wrappers/InputWrappers/MuscleGroup'

import bicep from '../../assets/biceps.png'
import trciep from '../../assets/triceps.png'
import chest from '../../assets/chest.png'
import back from '../../assets/back.png'
import legs from '../../assets/legs.png'
import shoulder from '../../assets/shoulder.png'


const Musclegroup = () => {
  return (
   <>
     <Wrapper>
        <span className='title'>Select Muscle Group</span>
        <div className="muscle-group-container">
            <div className="bicep muscle">
                <img src={bicep} alt="bicep" />
                <span>bicep</span>
            </div>
            <div className="tricep muscle">
                <img src={trciep} alt="tricep" />
                <span>tricep</span>
            </div>
            <div className="chest muscle">
                <img src={chest} alt="chest" />
                <span>chest</span>
            </div>
            <div className="back muscle">
                <img src={back} alt="back" />
                <span>back</span>
            </div>
            <div className="legs muscle">
                <img src={legs} alt="legs" />
                <span>legs</span>
            </div>
            <div className="shoulder muscle">
                <img src={shoulder} alt="shoulder" />
                <span>shoulder</span>
            </div>
        </div>
        
     </Wrapper>
   </>
  )
}

export default Musclegroup