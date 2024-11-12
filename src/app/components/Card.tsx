import React from 'react'
import Image from 'next/image'
interface Props {
    name: string,
    classs: string,
    roll: number,
    day: string,
    batch: string,
    image: string,


}

const Card = (props: Props) => {
    return (
        <div className="w-60 h-80 bg-red-400  border-black border flex justify-center items-center
     hover:bg-red-600 flex-col py-3">

            <div className=''>
                <Image src={'/images.jpg'} alt={'logo Image'} width={60} height={60} className='mr-40 rounded-full mt-12'>

                </Image>
            </div>

            {/* Profile  */}
            <div className=''>
                <Image src={props.image} alt={"Profile"} width={100} height={100} className='rounded-full border mb-6 border-black'>

                </Image>
            </div>
            <div className='text-sm font-bold tracking-wider mb-12 '>
                <h1>Name: {props.name}</h1>
                <h1>Class: {props.classs}</h1>
                <h1>Roll No: {props.roll}</h1>
                <h1>Day: {props.day}</h1>
                <h1>Batch: {props.batch}</h1>
            </div>

        </div>
    )
}

export default Card
