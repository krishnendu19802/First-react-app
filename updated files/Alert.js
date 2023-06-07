import React from 'react'

export default function Alert(props) {
    return (
        <div className="container-fluid" style={{ height: '50px' }}>


            {props.alert &&
                <div div className={`alert alert- alert-${props.alert.col} dismissible fade show`}
         role="alert">
            <strong> {props.alert.msg}</strong>
             </div>
        
         }
         </div >
    )
}
