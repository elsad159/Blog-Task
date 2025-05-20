import React from 'react';
import Card from '../components/ui-components/Card';
import blogs from "../mockData/blogs.json";

const data = blogs.blogs;

const Cards = () => {
    return (
        <div
            style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}
        >
            {data.map((blog) => (
                <Card
                    key={blog.id}
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
    );
};

export default Cards;
