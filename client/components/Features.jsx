import React from 'react'

const Features = (props) => {
  console.log("props.game" ,props.features)
  return (
    <div >
      {props.features.map( (fet, index) => {
       return <div key= {index}> language:{fet} </div>
      })
    }
    
    </div>
  )
}
export default Features

