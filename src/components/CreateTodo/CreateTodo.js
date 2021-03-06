import React, {useState} from 'react';
import {connect} from "react-redux";
import {fetchCreateTodo} from "../../api/fetchData";

const CreateTodo = (props) => {
    const [isValidData, setIsValidData] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        props.addTodo({name: name, description: description});
        setName('');
        setDescription('');
    }

    return (
        <form className="form-inline">
            <div className="form-group mb-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" className="form-control" placeholder="Name"
                       value={name}
                       onChange={(e) => {
                           setName(e.target.value)
                           setIsValidData(e.target.value.length > 0 && description.length > 0)
                       }}
                />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="desc" className="sr-only">Description</label>
                <input type="text" className="form-control" placeholder="Description"
                       value={description}
                       onChange={(e) => {
                           setDescription(e.target.value);
                           setIsValidData(name.length > 0 && e.target.value.length > 0)
                       }}
                />
            </div>
            <button className="btn btn-success mb-2" onClick={addTodo} disabled={!isValidData}>Add</button>
        </form>
    );
};

const mapStateToProps = (state) => (
    {todos: state.todos}
);

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(fetchCreateTodo(todo)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);