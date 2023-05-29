import React, { useEffect, useState, useRef } from "react"
import { ServicesObj } from '../../models/services.js'
import DescriptionCard from "../DescriptionCard/DescriptionCard"

type ServiceSelectionProps = {
    selectedService: string
}

export default function ServiceSelection( props: ServiceSelectionProps) {
    const { selectedService } = props
    const[serviceSelected, setServiceSelected] = useState(false)
    const [serviceData, setServiceData] = useState(Object)
    const flexContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
             if(selectedService !== 'none') {
            const services = ServicesObj()
            setServiceSelected(true)

            for(const service of services) {
                if(service.type === selectedService) {
                    setServiceData(service.services)
                }
            }
        }
    }, [selectedService])

    function ShowAvailableServiceTypes() {
        return (
            <p>Select a service:</p>
        )
    }

    function ShowAvailableServicesFromType() {
        return (
            <div className='flex flex-col md:flex-row xs:justify-center sm:justify-start xl:justify-center items-center sm:flex-wrap sm:content-between relative mt-20 sm:ml-20'
            ref={flexContainerRef}>
                {serviceData.map((data: { name: string, description: string, imageSrc: string, imageAlt: string}, index: React.Key ) => (
                    <DescriptionCard title={data.name} description={data.description} imageSrc={data.imageSrc} imageAlt={data.imageAlt} key={index}/>
                ))}
            </div>
        )
    }

    return(
        <div className="flex relative justify-center items-center pb-10">
            {!serviceSelected && <ShowAvailableServiceTypes />}
            {serviceSelected && <ShowAvailableServicesFromType />}
        </div>
    )
}