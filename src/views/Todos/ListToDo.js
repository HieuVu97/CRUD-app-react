import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';



class ListToDo extends React.Component {

    state = {
        listToDo: [
            { id: 'todo1', title: 'Going to gym' },
            { id: 'todo2', title: 'Coding ' },
            { id: 'todo3', title: 'Fixing bugs' }

        ],
        editToDo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })

    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listToDo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listToDo: currentTodo
        })
        toast.success('Delete success!')
    }

    handleEditTodo = (todo) => {
        let { editToDo, listToDo } = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0;

        //Save
        if (isEmptyObj === false && editToDo.id === todo.id) {
            let listTodoCopy = [...listToDo];
            let objindex = listTodoCopy.findIndex(item => item.id === todo.id);
            listTodoCopy[objindex].title = editToDo.title;
            this.setState({
                listToDo: listTodoCopy,
                editToDo: {}
            })
            toast.success('Save success!')
            return;
        }
        //Edit
        this.setState({
            editToDo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editToDo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editToDo: editTodoCopy
        })
    }

    render() {

        let { listToDo, editToDo } = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0;
        return (
            <>
                <p>
                    TODOLIST APP
                </p>
                <div className="list-todo-container">

                    <AddToDo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">

                        {listToDo && listToDo.length > 0 &&
                            listToDo.map((item, index) => {
                                return (
                                    <div className="todo-child">
                                        {isEmptyObj === true
                                            ?
                                            <span>{index + 1}-{item.title}</span>
                                            :
                                            <>
                                                {editToDo.id === item.id ?
                                                    <span>
                                                        {index + 1}-<input
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                            value={editToDo.title} />
                                                    </span>
                                                    :
                                                    <span>{index + 1}-{item.title}</span>
                                                }

                                            </>

                                        }


                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editToDo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })}



                    </div>

                </div></>

        )
    }
}

export default ListToDo