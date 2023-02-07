import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ListIcon from '@mui/icons-material/List';

const NavBar = () => {
    return (
        <>
            <div className=' py-3 px-10 flex justify-between bg-gray-400 bg-opacity-20'>
                <div className='flex gap-2'>
                    <div className='text-red-600'>
                        <PlayCircleOutlineIcon />
                    </div>
                    <div>
                        <p className='text-white'>
                            APP NAME
                        </p>
                    </div>
                </div>
                <div>
                    <div className='text-white'>
                        <ListIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar