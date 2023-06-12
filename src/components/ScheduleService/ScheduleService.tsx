import React, { useCallback, useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ScheduleServiceModal from '../ScheduleServiceModal/ScheduleServiceModal'
import './ScheduleService.css'

type ScheduleServiceProps = {
    service: string
}

export default function ScheduleService(props: ScheduleServiceProps) {
    const { service } = props
    const currentDate = new Date()
    const maxTextInput = 32
    const maxEmailInput = 50
    const [scheduleDate, setScheduleDate] = useState(new Date(getMinYear(), getMinMonth(), getMinDay()))
    const [scheduleTime, setScheduleTime] = useState('08:00:00')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        phoneError: false
    })
    const toggleSubmitDisable = useCallback(() => {
        const { firstName, lastName, email, phone, firstNameError, lastNameError, emailError, phoneError } = formState
        
        const isFormValid =
            firstName !== '' &&
            lastName !== '' &&
            email !== '' &&
            phone !== '' &&
            !firstNameError &&
            !lastNameError &&
            !emailError &&
            !phoneError

        setButtonDisabled(!isFormValid)
    }, [formState])

    useEffect(() => {
        toggleSubmitDisable()
    }, [formState, toggleSubmitDisable])

    const checkFirstNameIsValid = useCallback((name: string) => {
        const nameRegex = /^[a-zA-Z-]+$/
        if (nameRegex.test(name)) {
            setFormState(prevState => ({
                ...prevState,
                firstName: name,
                firstNameError: false
            }))
        } else {
            setFormState(prevState => ({
                ...prevState,
                firstName: '',
                firstNameError: true
            }))
        }
    }, [])
      
    const checkLastNameIsValid = useCallback((name: string) => {
        const nameRegex = /^[a-zA-Z-]+$/
        if (nameRegex.test(name)) {
            setFormState(prevState => ({
                ...prevState,
                lastName: name,
                lastNameError: false
            }))
        } else {
            setFormState(prevState => ({
                ...prevState,
                lastName: '',
                lastNameError: true
          }))
        }
    }, [])

    const checkEmailIsValid = useCallback((email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(emailRegex.test(email)) {
            setFormState(prevState => ({
                ...prevState,
                email: email,
                emailError: false
            }))
        } else {
            setFormState(prevState => ({
                ...prevState,
                email: '',
                emailError: true
            }))
        }
    }, [])

    const checkPhoneIsValid = useCallback((phone: string) => {
        const phoneRegex = /^(\(\d{3}\)|\d{3})(-)?\d{3}(-)?\d{4}$/
        if(phoneRegex.test(phone)) {
            setFormState(prevState => ({
                ...prevState,
                phone: phone,
                phoneError: false
            }))
        } else {
            setFormState(prevState => ({
                ...prevState,
                phone: '',
                phoneError: true
            }))
        }
    }, [])

    function getMinDay() {
        return currentDate.getDate() + 1
    }

    function getMinMonth() {
        return currentDate.getMonth()
    }

    function getMinYear() {
        return currentDate.getFullYear()
    }

    function findMaxDate() {
        const minDay = getMinDay()
        const minMonth = getMinMonth()
        const minYear = getMinYear()
        
        let maxDay: number 
        let maxMonth: number
        let maxYear: number

        const checkDate = new Date(minYear, minMonth, 0).getDate()

        if(minDay <= checkDate) {
            maxDay = minDay
        } else {
            maxDay = 1
        }

        if((minMonth + 1) < 11) {
            maxMonth = minMonth + 1
            maxYear = minYear
        } else {
            maxMonth = 1
            maxYear = minYear + 1
        }

        return new Date(maxYear, maxMonth, maxDay)

    }

    function Schedule() {
        const minDay = getMinDay()
        const minMonth = getMinMonth()
        const minYear = getMinYear()

        const minDate = new Date(minYear, minMonth, minDay )
        const maxDate = findMaxDate()

        return (
            <Calendar view='month'
            minDate={ minDate }
            minDetail='month'
            maxDate={ maxDate }
            defaultValue={ minDate }
            onClickDay={ (newDate) => setScheduleDate(newDate) }
            value={ scheduleDate }/>
        )
    }

    function HourSelect() {

        return (
            <select className='flex flex-col justify-center items-center w-3/4 h-10 mb-8 text-justify text-xl pl-[100px] pt-1 font-bold shadow-md'
            onChange={(event) => setScheduleTime(event.target.value)}
            value={scheduleTime}>
                <option value='08:00:00'>8:00 am</option>
                <option value='09:00:00'>9:00 am</option>
                <option value='10:00:00'>10:00 am</option>
                <option value='11:00:00'>11:00 am</option>
                <option value='12:00:00'>12:00 pm</option>
                <option value='13:00:00'>1:00 pm</option>
                <option value='14:00:00'>2:00 pm</option>
                <option value='15:00:00'>3:00 pm</option>
                <option value='16:00:00'>4:00 pm</option>
                <option value='17:00:00'>5:00 pm</option>
            </select>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <div className='flex flex-col justify-center items-center w-3/4 mb-10'>
                <div className='flex flex-col justify-between relative w-full sm:flex-row sm:justify-around'>

                    {formState.firstNameError && <div className='flex absolute text-invalid-red font-bold text-3xl right-[105%] top-[34px]'>!</div>}
                    <label htmlFor='first-name' className='mt-2'>First Name:</label>
                    <input type='text' 
                    id='first-name' 
                    placeholder='John' 
                    maxLength={maxTextInput} 
                    className='flex w-full h-10 text-lg pl-2 rounded-md shadow-md'
                    onChange={(event) => checkFirstNameIsValid(event.target.value)}/>

                    {formState.lastNameError && <div className='flex absolute text-invalid-red font-bold text-3xl right-[105%] top-[105px]'>!</div>}
                    <label htmlFor='last-name' className='mt-2'>Last Name:</label>
                    <input type='text' 
                    id='last-name' 
                    placeholder='Doe' 
                    maxLength={maxTextInput}
                    className='flex w-full h-10 text-lg pl-2 rounded-md shadow-md'
                    onChange={(event) => checkLastNameIsValid(event.target.value)}/>
                </div>

                <div className='flex flex-col justify-between relative w-full sm:flex-row sm:justify-center'>

                    {formState.emailError && <div className='flex absolute text-invalid-red font-bold text-3xl right-[105%] top-[34px]'>!</div>}
                    <label htmlFor='email' className='mt-2'>Email:</label>
                    <input type='email' 
                    id='email' 
                    placeholder='example@gmail.com'
                    maxLength={maxEmailInput}
                    className='flex w-full h-10 text-lg pl-2 rounded-md shadow-md'
                    onChange={(event) => checkEmailIsValid(event.target.value)}/>

                    {formState.phoneError && <div className='flex absolute text-invalid-red font-bold text-3xl right-[105%] top-[105px]'>!</div>}
                    <label htmlFor='phone' className='mt-2'>Phone:</label>
                    <input type='tel' 
                    id='phone' 
                    placeholder='765-321-7654' 
                    maxLength={maxTextInput}
                    className='flex w-full h-10 text-lg pl-2 rounded-md shadow-md'
                    onChange={(event) => checkPhoneIsValid(event.target.value)}/>
                </div>
            </div>

            <HourSelect />

            <Schedule />
            
            <div className='flex justify-center items-center w-full mt-8'>
                <button className="flex items-center justify-center rounded-2xl h-14 w-40 mt-5 mb-10 disabled:bg-medium-gray disabled:opacity-50 disabled:cursor-pointer enabled:bg-gradient-to-r enabled:from-dark-forest-green enabled:from-45% enabled:via-modern-green-dark enabled:via-60% enabled:to-modern-green-light enabled:bg-right-bottom hover:bg-left-bottom bg-[length:300%_100%] transition-all duration-500 ease-out" 
                disabled={buttonDisabled}
                onClick={() => setShowModal(true)} >
                    <p className="text-center text-2xl text-white return-text-shadow">Submit</p>
                </button>
            </div>

        {showModal && <ScheduleServiceModal service={service}
        scheduleDate={scheduleDate}
        scheduleTime={scheduleTime}
        back={() => setShowModal(false)}
        confirm={() => {console.log('confirmed')}}/>}

        </div>
    )
}