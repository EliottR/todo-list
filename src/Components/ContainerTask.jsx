import React, { Component } from 'react';

//variables
let lastElement = [];

function Task(props) {
    return (
        <section className='taskContainer__task'>
            <p className="taskContainer__task__text">{props.value}</p>
            <button onClick={props.onEdit}>edit</button>
            <button onClick={props.onDelete}>delete</button>
        </section>
    )
}
function Input(props) {
    return (
        <form className='inputContainer'>
            <input id='input' className='inputContainer__input' type="text" placeholder="Écrivez ici" name="text" onChange={(e) => lastElement.push(e.target.value)} />
            <button className='inputContainer__button' onClick={props.onClick} type="button">valider</button>
        </form>
    )
}

function InputEdit(props) {
    return (
        <form className='taskContainer__inputEdit'>
            <input className='taskContainer__inputEdit__input' type="text" defaultValue={props.defaultValue} onChange={(e) => lastElement.push(e.target.value)} name='text' />
            <button className='taskContainer__inputEdit__button' onClick={props.onClick} type="button">valider</button>
        </form>
    )
}

function replaceWord(arr, index, item) {
    arr[index] = item;
}

class ContainerTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            array: [],
            inputEdit: false,
            textEdit: '',
            seeInput: false,
        }
    }

    addTask() {

        if (
            (lastElement[lastElement.length - 1] != this.state.array[this.state.array.length - 1])
            && (lastElement.length != 0)
            && (this.state.array.indexOf(lastElement[lastElement.length - 1]) == -1)
        ) {
            this.state.array.push(lastElement[lastElement.length - 1]);
            document.getElementById('input').value = '';
            lastElement = [];
        }

        this.setState({
            value: !false,
        })
    }

    validModif(text) {
        if (lastElement[lastElement.length - 1] != undefined && this.state.array.indexOf(lastElement[lastElement.length - 1]) == -1) {
            replaceWord(this.state.array, this.state.array.indexOf(text), lastElement[lastElement.length - 1])
        }
        else if (text == lastElement[lastElement.length - 1]) {
            replaceWord(this.state.array, this.state.array.indexOf(text), text)
        }
        else if (this.state.array.indexOf(lastElement[lastElement.length - 1]) != -1) {
            alert('cette tâche existe déjà !')
            return false;
        }

        this.setState({
            value: !false,
            seeInput: false
        })
    }

    deleteTask(text) {
        this.state.array.splice(this.state.array.indexOf(text), 1)

        this.setState({
            value: !false,
        })
    }

    editTask(text) {
        this.setState({
            value: !false,
            inputEdit: !false,
            textEdit: text,
            seeInput: true
        })
    }

    render() {
        return (
            <>
                <Input onClick={(e) => this.addTask(e)} />
                <article className='taskContainer'>
                    {this.state.array.map((text, i) => {
                        if (this.state.textEdit == text && this.state.seeInput == true) {
                            return <InputEdit key={i} defaultValue={text} onClick={this.validModif.bind(this, text)} />
                        }
                        else {
                            return <Task key={i} value={text} onDelete={this.deleteTask.bind(this, text)} onEdit={this.editTask.bind(this, text)} />
                        }
                    })}
                </article>
            </>
        );
    }
}

export default ContainerTask;