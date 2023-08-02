import React, { useEffect, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'


const Progress = ({ data }) => {
    return (
        <div className='flex flex-col gap-5 mt-10'>
            {
                data.map((item, index) => (
                    <div>
                        <p>
                            {item.text}
                        </p>
                        <div className='lg:w-[400px]'>
                            <ProgressBar
                                isLabelVisible={false}
                                key={index}
                                height='10px'
                                bgColor={item.bgColor}
                                completed={item.completed}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Progress