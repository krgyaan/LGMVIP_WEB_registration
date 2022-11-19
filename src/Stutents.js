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
                                <h2>setName</h2>
                                <p>setEmail</p>
                                <p>setWebsite</p>
                                <p>setImage</p>
                                <p>setGender</p>
                                <p>setSkills</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <img src="https://picsum.photos/100/150" alt="student" />
                            <div className="cardBody">
                                <h2>setName</h2>
                                <p>setEmail</p>
                                <p>setWebsite</p>
                                <p>setImage</p>
                                <p>setGender</p>
                                <p>setSkills</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Stutents