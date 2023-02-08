import Avatar from '@/components/Avatar/Avatar'
import Layout from '@/components/Layout/Layout'
import React from 'react'
import ContentView from '@/components/watchNowComp/contentView';
import RelatedContents from '@/components/watchNowComp/RelatedContents';
const WatchNow = () => {
    return (
        <Layout>
            <div className='w-full h-full flex gap-2  '>
                <div className='w-8/12'>
                    <ContentView />
                </div>
                <div className=' w-4/12'>
                    <RelatedContents />
                </div>
            </div>
        </Layout>
    )
}

export default WatchNow 