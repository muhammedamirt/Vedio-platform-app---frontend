import React from 'react'
import Card from '../Card/Card'
import ContentList from './ContentList'
import { dummyData } from '@/dummy/dummyData';

const RelatedContents = ({ content }) => {
    return (
        <div>
            <Card>
                <div className='h-[89vh]'>
                    <div className='text-white '>
                        <h2 className='font-bold underline text-xl '>Related Videos</h2>
                        <div className='overflow-y-scroll h-[83vh] rounded-md'>
                            {
                                dummyData.map((content) => {
                                    return <div>
                                        <ContentList content={content} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RelatedContents