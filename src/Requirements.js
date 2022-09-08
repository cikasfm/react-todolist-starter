import React, { Component } from "react";
/**
 * props:
 *    onToggle(state object) func - A callback after the component is toggled.
 */
export default class Requirements extends Component {
  state = {
    show: false
  };

  toggle = () => {
    const { onToggle = () => {} } = this.props;
    this.setState(
      ({ show }) => {
        return {
          show: !show
        };
      },
      () => onToggle(this.state)
    );
  };

  render() {
    const { show } = this.state;
    return (
      <div className="container">
        <div className="p-5 mb-4 mt-4 bg-light rounded-3">
          <div className="container-fluid">
            <h1 className="display-5 fw-bold">Coding exercise</h1>
            <p className="col-md-8 fs-4">
              The goal of this task is to implement a Simple Todo List
            </p>
            <button
                className="btn btn-primary btn-lg"
                type="button"
                onClick={this.toggle}
            >
              Requirements
            </button>
            {show ? (
              <div id="requirements" className="mt-4">
                <h2>Requirements</h2>
                <p>
                    The goal of this exercise is to create a simple TodoList component allowing the user to:
                    <ul>
                        <li>Create a new task</li>
                        <li>Display a list of tasks</li>
                        <li>Remove a task</li>
                    </ul>
                    
                    On top of the main functionality you should use the provided "backend" service and implement a proper error handling.
                    
                    Feel free to use any additional library required
                </p>
                <h3>UI Controls</h3>
                Here's a list of UI controls to be used
                <dl>
                  <dt>Task name</dt>
                  <dd>Input field (text)</dd>

                  <dt>Add task</dt>
                  <dd>Button</dd>

                  <dt>Task list</dt>
                  <dd>List</dd>

                  <dt>Task item</dt>
                  <dd>Delete</dd>
                </dl>
                <h3>Implementation details</h3>
                Use the provided <code>todo.service.js</code> as a backend
                service for load/add/remove operations.
                See JS Docs on <a href="https://github.com/cikasfm/react-todolist-starter/blob/main/docs/todo.service.md">github</a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
