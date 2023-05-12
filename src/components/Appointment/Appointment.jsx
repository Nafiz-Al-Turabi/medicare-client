import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';

const Appointment = () => {
    const [appointments,setAppointments]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[])
    return (
        <div className='my-20'>
            <h1 className='text-2xl md:text-4xl font-bold text-center underline underline-offset-[12px]'>Fixed Your Appointment</h1>
            <p className='mt-8 mb-8 w-1/2 mx-auto text-center'>Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    appointments.map(appointment=><Card key={appointment.id} appointment={appointment}></Card>)
                }
            </div>
        </div>
    );
};

export default Appointment;