import React, { useState } from 'react'
import DefaultLayout from '../components/layouts/default'
import { getPosts } from '../actions/post'
import PostList from '../components/post/list'
import LeftArea from '../components/include/left-area'
import InfiniteScroll from 'react-infinite-scroll-component'

const limit = 5

export default function Home({ data }) {
    const [posts, setPosts] = useState(data.result.items)
    const [currentPageNumber, setCurrentPageNumber] = useState(data.result.current_page_number)
    const [hasMore, setHasMore] = useState(true)
    const numItemsPerPage = data.result.num_items_per_page
    const totalCount = data.result.total_count
    const pagesCount = Math.ceil(totalCount / numItemsPerPage)

    const getMorePosts = async () => {
        let pageNumber = currentPageNumber + 1
        if (pageNumber <= pagesCount) {
            setCurrentPageNumber(pageNumber)
            const newPosts = await getPosts({ page: pageNumber, limit: limit })
            setPosts([...posts, ...newPosts.result.items])
        } else {
            setHasMore(false)
        }
    }

    return (
        <DefaultLayout>
            <div className="main-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <LeftArea></LeftArea>
                        </div>

                        <div className="col-12 col-md-9">
                            <div className="posts">
                                {data.success ? (
                                    <InfiniteScroll
                                        dataLength={posts.length}
                                        next={getMorePosts}
                                        hasMore={hasMore}
                                        loader={
                                            <div className="d-flex justify-content-center">
                                                <div className="spinner-grow" role="status">
                                                    <span className="sr-only">Yükleniyor...</span>
                                                </div>
                                            </div>
                                        }
                                    >
                                        <PostList posts={posts}></PostList>
                                    </InfiniteScroll>
                                ) : (
                                    'İçerik bulunmamaktadır.'
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export async function getServerSideProps() {
    const data = await getPosts({ page: 1, limit: limit })

    return {
        props: {
            data
        }
    }
}
