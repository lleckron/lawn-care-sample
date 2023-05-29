import React, { useEffect, useState } from "react"
import { ServicesObj } from '../../models/services.js'
import DescriptionCard from "../DescriptionCard/DescriptionCard"

type ServiceSelectionProps = {
    selectedService: string
}

export default function ServiceSelection( props: ServiceSelectionProps) {
    const { selectedService } = props
    const[serviceSelected, setServiceSelected] = useState(false)
    const [serviceData, setServiceData] = useState(Object)

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
            <div className='flex flex-col md:flex-row justify-center items-center flex-wrap relative mt-20'>
                {serviceData.map((data: { name: string, description: string, imageSrc: string, imageAlt: string}, index: React.Key ) => (
                    <DescriptionCard title={data.name} 
                    description={data.description} 
                    imageSrc={data.imageSrc} 
                    imageAlt={data.imageAlt} 
                    hoverEffect={true}
                    key={index}/>
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