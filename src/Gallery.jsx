import React from "react";

const gallery = [
    {
        id : 1,
        url : "https://t4.ftcdn.net/jpg/04/35/69/17/240_F_435691745_YxFIjJPgfz5BzY0OOOhSk2g5TUHL5zXT.jpg",
        caption : "Nature"
    },
    {
        id : 2,
        url : "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
        caption : "City"
    },
    {
        id : 3,
        url : "https://plus.unsplash.com/premium_photo-1669613233573-4911a0a81c63?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
        caption : "Forest"
    }
];

function Gallery(){
    return (
        <>
        {gallery.map((e) => (
            <div key={e.id}>
                <img src={e.url} alt={e.caption} />
                <p>Caption : {e.caption}</p>
                <hr />
            </div>
        ))}
        </>
    )
}

export default Gallery;