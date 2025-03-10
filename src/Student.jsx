import React from "react";

const student = [
    {id : 1, name : " vaish", batch : "OCT PB 2024", time : "11am to 1pm"},
    {id : 2, name : "aray", batch : "NOV PB 2024", time : "11am to 1pm"},
    {id : 3, name : "sai", batch : "DEC PB 2024", time : "11am to 1pm"}
]

function Student() {
    return (
        <>
        {student.map((e) => (
            <div key={e.id}>
                <h2>Student Name : {e.name}</h2>
                <p>Batch : {e.batch}</p>
                <p>Timming : {e.time}</p>
                <hr />
            </div>
        ))}
        </>
    )
}

export default Student;