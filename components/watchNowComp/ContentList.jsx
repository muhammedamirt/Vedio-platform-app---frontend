import React from 'react'

const ContentList = ({ content }) => {
    return (
        <div>
            <div className='flex gap-3 shadow px-3 mb-5 sm:mb-0 hover:shadow-gray-800 rounded-lg bg-gray-300 hover:bg-opacity-30 bg-opacity-10 transition  py-2 mt-1'>
                <div className='w-40 items-center'>
                    <img src={content?.image} alt="" />
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet....
                    </p>
                    <span className='text-xs'>
                        <p>
                            100k views
                        </p>
                    </span>
                    <div className='flex gap-2'>
                        <div>
                            <div className='h-9 w-9  rounded-full'>
                                <img className='overflow-hidden rounded-full' src="https://yt3.googleusercontent.com/E5NXIkwoi7Z13Jsw5IJFq7JUrkobU4ag3csFCZVOx4qUT1PaUepShQAhL1t5eAFmVh7NugTmRQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
                            </div>
                        </div>
                        <div>
                            <p className='font-bold mt-2'>Channel name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentList