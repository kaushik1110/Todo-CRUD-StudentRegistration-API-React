import React, { Component } from "react";
import Table from "./Table";

const errorMsg = {
  color: "red",
};

export class StudentManagement extends Component {
  constructor(props) {
    super();
    this.clickOnDelete = this.clickOnDelete.bind(this);
    this.clickOnUpdate = this.clickOnUpdate.bind(this);
  }
  state = {
    student: {
      fname: "",
      city: "surat",
      email: "",
      birthDay: "",
      course: "bca",
      id: null,
    },
    courses: ["bca", "mca", "b.com", "m.com", "B.E"],
    cities: ["surat", "amdavad", "vadodara", "rajkot", "bardoli"],
    isFormSubmit: false,
    isUpdateForm: false,
    students: [],
    error: "",
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    if (this.state.isUpdateForm && this.state.student.id) {
      this.setState({
        ...this.state,
        isUpdateForm: false,
        students: [{ ...this.state.students, ...this.state.student }],
        student: {
          fname: "",
          city: "surat",
          email: "",
          birthDay: "",
          course: "bca",
        },
      });
    } else {
      console.log("addNew");

      this.setState({
        ...this.state,
        isFormSubmit: true,
        students: [
          ...this.state.students,
          {
            ...this.state.student,
            id: Math.random().toString(36).substr(2, 9),
          },
        ],
        student: {
          fname: "",
          city: "surat",
          email: "",
          birthDay: "",
          course: "bca",
        },
      });
    }
  };

  formChangeHandler = (event) => {
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        [event.target.name]: event.target.value,
      },
    });
  };

  clickOnDelete(id) {
    console.log("delete", id);
    this.setState({
      ...this.state,
      students: this.state.students.filter((r) => {
        return r.id !== id;
      }),
    });
  }

  clickOnUpdate(item) {
    this.setState({
      ...this.state,
      isUpdateForm: true,
      student: {
        isUpdateForm: false,
        fname: item.fname,
        city: item.city,
        email: item.email,
        birthDay: item.birthDay,
        course: item.course,
        id: item.id,
      },
    });
  }

  render() {
    return (
      <div>
        {/* form */}
        <div>
          <h1>Student Registration</h1>
          {this.state.error.length > 0 && (
            <h5 style={errorMsg}>error :{this.state.error}</h5>
          )}
          <label>Full name:</label>
          <input
            type="text"
            name="fname"
            value={this.state.student.fname}
            onChange={(event) => this.formChangeHandler(event)}
          />
          <br />

          <label>Choose a city:</label>
          <select
            name="city"
            value={this.state.student.city}
            onChange={(event) => this.formChangeHandler(event)}
          >
            {this.state.cities.map((cityname, index) => (
              <option key={index} value={cityname}>
                {cityname}
              </option>
            ))}
          </select>
          <br />

          <label>Enter your email:</label>
          <input
            type="text"
            name="email"
            value={this.state.student.email}
            onChange={(event) => this.formChangeHandler(event)}
          />
          <br />

          <label htmlFor="birthDay">BirthDay:</label>
          <input
            type="date"
            name="birthDay"
            value={this.state.student.birthDay}
            onChange={(event) => this.formChangeHandler(event)}
          />
          <br />

          <label>Choose a course:</label>
          <select
            name="course"
            value={this.state.student.course}
            onChange={(event) => this.formChangeHandler(event)}
          >
            {this.state.courses.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <br />
          <button onClick={(event) => this.onSubmitForm(event)}>
            {this.state.isUpdateForm ? "Update" : "Save"}
          </button>
        </div>
        {/* end form */}
        {/* table data */}
        <div>
          {this.state.isFormSubmit && this.state.students.length > 0 && (
            <Table
              data={this.state.students}
              clickOnDelete={this.clickOnDelete}
              clickOnUpdate={this.clickOnUpdate}
            />
          )}
        </div>
        {/* end table data */}
      </div>
    );
  }
}

export default StudentManagement;
