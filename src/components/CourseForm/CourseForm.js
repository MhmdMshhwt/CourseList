import React from "react";

const CourseForm = (props) => {
    
    return (
        <div>
            <form onSubmit={props.addCourse}>
                <input type="text" placeholder="Enter Course..." onChange={props.updateCourse} value={ props.current } />
                <button>Add Course</button>
            </form>        
        </div>  
    );
}

export default CourseForm;