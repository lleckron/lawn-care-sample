import React, { useEffect, useState, useMemo } from "react"
import { ServicesObj } from '../../models/services.js'
import DescriptionCard from "../DescriptionCard/DescriptionCard"
import { Link } from 'react-router-dom'
import './ServiceSelection.css'

type ServiceSelectionProps = {
    selectedServiceType: string,
    setSelectedServiceType: (serviceType: string) => void,
    setSelectedService: (service: string) => void
}

export default function ServiceSelection( props: ServiceSelectionProps) {
    const { selectedServiceType, setSelectedServiceType, setSelectedService } = props
    const[serviceSelected, setServiceSelected] = useState(false)
    const [serviceData, setServiceData] = useState(Object)
    const [serviceTypeData, setServiceTypeData] = useState(Object)
    const keys = Object.keys(serviceTypeData)
    const services = ServicesObj()
    const serviceList = useMemo(() => services, [services])

    useEffect(() => {
        if(selectedServiceType !== 'none') {
            pageForwardToServicesFromType(selectedServiceType)
        } else {
            pageBackToServiceTypes()
        }
    }, [selectedServiceType]) // eslint-disable-line react-hooks/exhaustive-deps

    function pageBackToServiceTypes() {
        setServiceTypeData(serviceList)
        setServiceSelected(false)
        setSelectedServiceType('none')
    }

    function pageForwardToServicesFromType(clickedServiceType: string) {
        for(const service of serviceList) {
            if(service.type === clickedServiceType) {
                setServiceData(service.services)
                setSelectedServiceType(service.type)
            }
        }
        
        setServiceSelected(true)
    }

    function serviceFromTypeClick(clickedService: string) {
        setSelectedService(clickedService)
    }

    function ShowAvailableServiceTypes() {
        return (
            <div className='flex flex-col md:flex-row justify-center items-center flex-wrap relative mt-20'>
                {keys.map((key) => {
                  const data = serviceTypeData[key];
                  return (
                        <DescriptionCard
                        title={data.type}
                        description={data.description}
                        imageSrc={data.imageSrc}
                        imageAlt={data.imageAlt}
                        hoverEffect={true}
                        key={key}
                        onClick={() => pageForwardToServicesFromType(data.type)}/>
                    )
                })}
            </div>
        )
    }

    function ShowAvailableServicesFromType() {
        return (
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-center items-center mt-7">
                    <button className="flex items-center justify-center rounded-2xl h-14 w-40 bg-gradient-to-r from-dark-forest-green from-45% via-modern-green-dark via-60% to-modern-green-light bg-right-bottom hover:bg-left-bottom bg-[length:300%_100%] transition-all duration-500 ease-out" 
                    onClick={pageBackToServiceTypes} >
                        <i className="flex mt-[2px] ml-[10px] p-[8px] border-white border-r-[2px] border-b-[2px] rotate-[135deg]"></i>
                        <p className="text-center ml-[10px] pr-[20px] text-2xl text-white return-text-shadow">Return</p>
                    </button>
                </div>
                <Link to="/scheduleService" className='flex flex-col md:flex-row justify-center items-center flex-wrap relative mt-10'>
                    {serviceData.map((data: { name: string, description: string, imageSrc: string, imageAlt: string}, index: React.Key ) => (
                        <DescriptionCard title={data.name} 
                        description={data.description} 
                        imageSrc={data.imageSrc} 
                        imageAlt={data.imageAlt} 
                        hoverEffect={true}
                        key={index}
                        onClick={() => serviceFromTypeClick(data.name)}/>
                    ))}
                </Link>
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