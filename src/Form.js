import React from 'react'

function Form() {
    return (
        <div>
            <form autoComplete="off">
                <div className="inputFld">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>
                <div className="inputFld">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="inputFld">
                    <label htmlFor="url">Website</label>
                    <input type="website" id="website" />
                </div>
                <div className="inputFld">
                    <label htmlFor="image">Image Link</label>
                    <input type="text" id="image" />
                </div>
                <div className="multiInput">
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name="gender" value="male" />Male
                    <input type="radio" name="gender" value="female" />Female
                </div>
                <div className="multiInput">
                    <label htmlFor="skill">Skills</label>
                    <input type="checkbox" name="skill" value="html" />HTML
                    <input type="checkbox" name="skill" value="css" />CSS
                    <input type="checkbox" name="skill" value="js" />JavaScript
                </div>
                <div>
                    <button type="submit">Enroll Student</button>
                    <button type="reset">Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Form