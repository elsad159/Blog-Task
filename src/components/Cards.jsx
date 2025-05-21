import React, { useEffect, useRef, useState } from 'react';
import Card from '../components/ui-components/Card';
import blogs from "../mockData/blogs.json";

const LOAD_COUNT = 12;

// 6 ay öncəki tarixi qaytarır
const getSixMonthsAgo = () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 6);
    return date;
};

const sixMonthsAgo = getSixMonthsAgo();
const filteredBlogs = blogs.blogs.filter(blog => new Date(blog.date) >= sixMonthsAgo);

console.log(blogs.blogs.length);


const Cards = () => {
    const [visibleBlogs, setVisibleBlogs] = useState([]);
    const [loadMore, setLoadMore] = useState(true);
    const observerRef = useRef(null);

    useEffect(() => {
        setVisibleBlogs(filteredBlogs.slice(0, LOAD_COUNT));
    }, []);

    useEffect(() => {
        if (!loadMore) return;

        const lastIndex = visibleBlogs.length;
        const nextBlogs = filteredBlogs.slice(lastIndex, lastIndex + LOAD_COUNT);

        if (nextBlogs.length > 0) {
            setVisibleBlogs(prev => [...prev, ...nextBlogs]);
        }

        setLoadMore(false);
    }, [loadMore]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setLoadMore(true);
                }
            },
            {
                threshold: 1.0
            }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    return (
        <>
            <div
                style={{
                    marginTop: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                {visibleBlogs.map((blog, index) => (
                    <Card
                        key={`${blog.id}-${index}`} 
                        heading={blog.title}
                        writer={blog.writer}
                        date={new Date(blog.date).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: '2-digit'
                        })}
                        views={blog.views}
                        category={blog.category}
                        description={blog.content}
                    />
                ))}

            </div>

            <div ref={observerRef} style={{ height: 50 }}></div>
        </>
    );
};

export default Cards;
