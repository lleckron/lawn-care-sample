import React from 'react'

type ScheduleServiceProps = {
    service: string
}

export default function ScheduleService(props: ScheduleServiceProps) {
    const { service } = props

    return (
        <div>
            <p>{ service }</p>
        </div>
    )
}