import React from "react";
import { toast } from 'react-toastify';
class AddToDo extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    HandleOnCLickAdd = () => {
        if (!this.state.title) {
            toast.error('Missing value!')
            return;

        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
        toast.success('So easy!')
    }

    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button className="add" type="button"
                    onClick={() => this.HandleOnCLickAdd()}
                >Add</button>

            </div>
        )
    }
}

export default AddToDo