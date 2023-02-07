import React from 'react'
import NavBar from '../NaveBar/NavBar';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Home = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className='min-h-[100vh] w-full border'>
                <div className='border w-64 px-2 py-2'>
                    <div className='w-60'>
                        <img src="https://wallpapercave.com/wp/wp9424849.jpg" alt="tumpnail" />
                    </div>
                    <div className='flex gap-5'>
                        <div className='h-12 w-12 border rounded-full'>
                            <img className='h-12 w-12 rounded-full object-cover' src="https://yt3.googleusercontent.com/E5NXIkwoi7Z13Jsw5IJFq7JUrkobU4ag3csFCZVOx4qUT1PaUepShQAhL1t5eAFmVh7NugTmRQ=s900-c-k-c0x00ffffff-no-rj" alt="avathar" />
                        </div>
                        <div>
                            <span className='text-white text-xs'>
                                <div className='flex gap-1'>
                                    <span className=''>
                                        <RemoveRedEyeIcon fontSize='' />
                                    </span>
                                    <p>100k</p>
                                </div>
                            </span>
                            <div>
                                <p className='text-white text-xs'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home