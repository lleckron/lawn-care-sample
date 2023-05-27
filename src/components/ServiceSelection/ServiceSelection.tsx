import React, { useState } from "react"
import { ServicesObj } from '../../models/services.js'

type ServiceSelectionProps = {
    selectedService: string | null
}

export default function ServiceSelection( props: ServiceSelectionProps) {
    const { selectedService } = props
    const[serviceSelected, setServiceSelected] = useState(false)
    const services = ServicesObj()

    function toggleServiceSelected(state: boolean) {
        setServiceSelected(state)
    }

    function ShowAvailableServiceTypes() {

    }

    function ShowAvailableServicesFromType(type: string) {

    }

    function ShowSelectedServiceInfo() {

        if(selectedService === null) {
            return (
                <p>No service Selected</p>
            )
        } else {
            toggleServiceSelected(true)
            return (
                <p>Service is { selectedService }</p>
            )
        }
    }

    return(
        <div>
            <ShowSelectedServiceInfo />
        </div>
    )
}