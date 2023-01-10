import React from "react";

import CourseForm from "./components/CourseForm/CourseForm";
import CourseList from "./components/CourseList/CourseList";

class App extends React.Component {
  state = {
    courses: [
      {name:'HTML'},
      {name:'CSS'},
      {name:'jQuery'},
    ],
    current: '',

  }

  //Update Course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    })
  }

  //Add Course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current === '') {
      return false  
    }
    else {
      courses.push({ name: current });
      this.setState({
        courses,
        current: '',      
      })
      
    }
  }

  //DeleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses
    courses.splice(index,1);
    this.setState({
      courses,
    })
  }

  // EditCourse
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses,
    })
  }

  render() {
    const { courses } = this.state;
    let length = courses.length;

    const coursList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />      
    })

    return(
      <section className="App">
        <h2>Add Courses</h2>
        <CourseForm current={this.state.current} addCourse={this.addCourse } updateCourse={this.updateCourse} />  
        {length? <ul>{coursList}</ul> : <span className="noItems">There is no Courses to show</span>}
      </section>
    );
    
  }

}

export default App;
