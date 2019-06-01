import React from 'react'

const Languages = (props) => {
  console.log("props.game" ,props.game)
  return (
    <div >
      {props.game.map( (lan, index) => {
       return <div key= {index}> language:{lan} </div>
      })
    }
    
    </div>
  )
}
export default Languages


