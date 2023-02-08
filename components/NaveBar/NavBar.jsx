import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ListIcon from '@mui/icons-material/List';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Avatar from '../Avatar/Avatar';

const NavBar = () => {
    return (
        <>
            <div className='w-full py-5 px-10 flex justify-between bg-gray-400 bg-opacity-20'>
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
                <div className='flex gap-4'>
                    <div className='text-white mt-1'>
                        <VideoCallIcon fontSize='medium' />
                    </div>
                    <div className='text-white mt-1'>
                        <NotificationsActiveIcon fontSize='medium' />
                    </div>
                    <div>
                        <Avatar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar