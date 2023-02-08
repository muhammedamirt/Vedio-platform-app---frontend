import React from 'react'
import NavBar from '../NaveBar/NavBar';
import Layout from '../Layout/Layout';
import VideoContents from '../VideoContents/VideoContents';
import { dummyData } from '../../dummy/dummyData'
import Link from 'next/link';


const Home = () => {
    return (
        <Layout>
            <div className=" sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    dummyData.map((content) => {
                        return <div className=''>
                            <Link href={'/user/watchNow'}>
                                <VideoContents content={content} />
                            </Link>
                        </div>
                    })
                }
            </div>
        </Layout>
    )
}

export default Home