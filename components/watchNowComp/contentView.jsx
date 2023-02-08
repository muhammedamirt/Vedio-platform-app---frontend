import React from 'react'
import Avatar from '../Avatar/Avatar'
import Card from '../Card/Card'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

const ContentView = () => {
    return (
        <Card>
            <div className='flex justify-center'>
                <div>
                    <div className='h-full w-full px-3 py-1'>
                        <video className='w-full' controls >
                            <source src='https://youtu.be/a6VVrAZUnsc' />
                        </video>
                        <div className='text-white'>
                            <span className='text-xs'>
                                100k views
                            </span>
                            <div>
                                <p className='break-words'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam modi facilis commodi et vero ipsum harum alias non, sapiente perspiciatis
                                    incidunt eaque aliquid repellat quidem rem, nisi aspernatur optio. Facere?
                                </p>
                            </div>
                            <div className='flex'>
                                <div className='flex justify-between py-2 px-2 gap-2 w-1/2'>
                                    <div className='flex gap-2'>
                                        <div>
                                            <Avatar />
                                        </div>
                                        <div>
                                            <p className='font-bold'>Channel name</p>
                                            <p className='text-xs'>1.2m Audience</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='bg-diesel-50 py-3 px-5 rounded-full text-diesel-700 font-bold'>
                                            Follow
                                        </button>
                                    </div>
                                </div>
                                <div className='flex justify-end py-2 px-2 gap-2 w-1/2 '>
                                    <div className='flex gap-2'>
                                        <div className='flex bg-diesel-50 py-2 px-5 rounded-full text-diesel-700 font-bold'>
                                            <button className=' rounded-l-full w-1/2'>
                                                <ThumbUpOffAltIcon />
                                            </button>
                                            <p className='mt-1'>
                                                Like
                                            </p>
                                        </div>
                                        <div className='flex bg-diesel-50 py-2 px-5 rounded-full text-diesel-700 font-bold'>
                                            <button className='rounded-l-full w-1/2'>
                                                <CommentOutlinedIcon />
                                            </button>
                                            <p className='mt-1'>
                                                Comment
                                            </p>
                                        </div>
                                        <div className='flex bg-diesel-50 py-2 px-5 rounded-full text-diesel-700 font-bold'>
                                            <button className=' rounded-l-full w-1/2'>
                                                <ReplyOutlinedIcon />
                                            </button>
                                            <p className='mt-1'>
                                                Share
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ContentView