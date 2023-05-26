import React from "react"
//import { ServicesObj } from '../../models/services.js'

type ServiceSelectionProps = {
    selectedService: string | null
}

export default function ServiceSelection( props: ServiceSelectionProps) {
    const { selectedService } = props

    function ShowSelectedServiceInfo() {
        console.log(selectedService)

        if(selectedService !== null) {
            return (
                <p>Service is { selectedService }</p>
            )
        } else {
            return (
                <p>No service Selected</p>
            )
        }
    }

    return(
        <div>
            <ShowSelectedServiceInfo />
        </div>
    )
}