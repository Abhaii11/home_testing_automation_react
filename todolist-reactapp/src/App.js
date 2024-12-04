// App.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";


class App extends Component {
    constructor(props) {
        super(props);

        // Setting up state
        this.state = {
            userInput: "",
            list: [], // Array of { id, value, completed }
            filter: "All", // Filter type: 'All', 'Active', 'Completed'
        };
    }

    // Set a user input value
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add item if user input is not empty
    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(), // Random ID
                value: this.state.userInput, // Task text
                completed: false, // Completion status
            };

            // Update list
            const list = [...this.state.list];
            list.push(userInput);

            // Reset state
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    // Toggle completion status of a task
    toggleCompletion(key) {
        const list = this.state.list.map((item) =>
            item.id === key ? { ...item, completed: !item.completed } : item
        );
        this.setState({ list });
    }

    // Delete item from the list
    deleteItem(key) {
        const list = [...this.state.list];
        const updatedList = list.filter((item) => item.id !== key);
        this.setState({ list: updatedList });
    }

    // Edit item
    editItem(index) {
        const todos = [...this.state.list];
        const editedTodo = prompt("Edit the todo:", todos[index].value);
        if (editedTodo !== null && editedTodo.trim() !== "") {
            let updatedTodos = [...todos];
            updatedTodos[index].value = editedTodo;
            this.setState({ list: updatedTodos });
        }
    }

    // Set filter type
    setFilter(filterType) {
        this.setState({ filter: filterType });
    }

    // Filter list based on filter type
    getFilteredList() {
        const { list, filter } = this.state;
        if (filter === "Completed") {
            return list.filter((item) => item.completed);
        } else if (filter === "Active") {
            return list.filter((item) => !item.completed);
        }
        return list; // 'All'
    }

    render() {
        const filteredList = this.getFilteredList();

        return (
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    TODO LIST
                </Row>
                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Add item . . ."
                                size="lg"
                                value={this.state.userInput}
                                onChange={(item) =>
                                    this.updateInput(item.target.value)
                                }
                                aria-label="Add something"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                    onClick={() => this.addItem()}
                                >
                                    ADD
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                Filter: {this.state.filter}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => this.setFilter("All")}
                                >
                                    All
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => this.setFilter("Active")}
                                >
                                    Active
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => this.setFilter("Completed")}
                                >
                                    Completed
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {filteredList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <ListGroup.Item
                                            variant="dark"
                                            action
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    textDecoration: item.completed
                                                        ? "line-through"
                                                        : "none",
                                                }}
                                            >
                                                {item.value}
                                            </span>
                                            <span>
                                                <Button
                                                    style={{ marginRight: "10px" }}
                                                    variant="light"
                                                    onClick={() =>
                                                        this.toggleCompletion(item.id)
                                                    }
                                                >
                                                    {item.completed
                                                        ? "Unmark"
                                                        : "Mark"}
                                                </Button>
                                                <Button
                                                    style={{ marginRight: "10px" }}
                                                    variant="light"
                                                    onClick={() =>
                                                        this.deleteItem(item.id)
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    variant="light"
                                                    onClick={() =>
                                                        this.editItem(index)
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                            </span>
                                        </ListGroup.Item>
                                    </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
