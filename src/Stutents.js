import React from 'react'

function Stutents() {
    return (
        <div>
            <div className="studentList">
                <h1>Student List</h1>
                <ul>
                    <li>
                        <div className="card">
                            <img src="https://picsum.photos/100/150" alt="student" />
                            <div className="cardBody">
                                <h2>Student Name</h2>
                                <p>Student Email</p>
                                <p>Student Website</p>
                                <p>Student Image</p>
                                <p>Student Gender</p>
                                <p>Student Skills</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <img src="https://picsum.photos/100/150" alt="student" />
                            <div className="cardBody">
                                <h2>Student Name</h2>
                                <p>Student Email</p>
                                <p>Student Website</p>
                                <p>Student Image</p>
                                <p>Student Gender</p>
                                <p>Student Skills</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Stutents