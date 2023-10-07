"use client"

import React, { useEffect, useState } from 'react'
import Card from './Card';
import data from '../assets/inmuebles'

const RealState = () => {
    const [inmuebles, setInmuebles] = useState([]);

    useEffect(() => {
        setInmuebles([...data])
    },[])

  return (
    <div className='max-w-8xl w-full mx-auto flex flex-wrap justify-around gap-4'>
        {
            inmuebles.map((item, index) => (
                <Card data={item} key={index} />
            ))
        }
    </div>
  )
}

export default RealState