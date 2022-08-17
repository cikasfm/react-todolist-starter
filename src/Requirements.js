import React, { Component } from "react";
/**
 * props:
 *    onToggle(state object) func - A callback after the component is toggled.
 *    label string - The label for the Dropdown
 *    children object - The content that needs to be shown or hidden
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
      <div class="container">
        <div class="p-5 mb-4 mt-4 bg-light rounded-3">
          <div class="container-fluid">
            <h1 class="display-5 fw-bold">Coding exercise</h1>
            <p class="col-md-8 fs-4">
              The goal of this task is to implement a Simple Todo List
            </p>
            <button
              class="btn btn-primary btn-lg"
              type="button"
              onClick={this.toggle}
            >
              Requirements
            </button>
            {show ? (
              <div id="requirements" class="mt-4">
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
                service for load/add/remove operations
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
