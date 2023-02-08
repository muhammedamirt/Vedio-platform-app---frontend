import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Avatar from '../Avatar/Avatar';

const VideoContents = ({ content }) => {
    return (
        <div>
            <div className='shadow hover:px-1 hover:py-1 mb-5 sm:mb-0 hover:shadow-gray-800 rounded-lg bg-gray-300 hover:bg-opacity-30 bg-opacity-10 transition'>
                <div className='flex justify-center'>
                    <div className='mb-1'>
                        <img className='rounded-sm' src={content?.image} alt="thumbnail" />
                    </div>
                </div>
                <div className='flex gap-5 px-2'>
                    <div className='py-2'>
                        <Avatar />
                    </div>
                    <div>
                        <span className='text-white text-xs'>
                            <div className='flex gap-1'>
                                <span className=''>
                                    <RemoveRedEyeIcon fontSize='small' />
                                </span>
                                <p className='text-xs '>100k views</p>
                            </div>
                        </span>
                        <div className='overflow-y-scroll h-10 mb-3'>
                            <p className='text-white text-xs'>
                                {content?.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoContents