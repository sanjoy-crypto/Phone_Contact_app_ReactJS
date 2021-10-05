import React from 'react'
import { Alert } from 'react-bootstrap'
const Alerts = ({ alert }) => {


    return (
        <>
            {
                alert &&
                <Alert variant={alert.type}>
                    <strong style={{ textTransform: 'capitalize' }}>{alert.type} : </strong>{alert.msg}
                </Alert>
            }
        </>
    )
}


export default Alerts
