

import React from 'react'

export default function Alert(props) {
  return (
    
         props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> : <strong>{props.alert.msg}</strong>
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        {/* the button is for closing the button, but here we will add a timer, which will automatically turn off */}
        </div> 

  )
}
// props.alert 1st checks if it is null or not, if not null then goes to the next evaluation 




