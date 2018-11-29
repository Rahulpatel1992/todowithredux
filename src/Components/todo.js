import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    render() {

        const list = this.props.todo.result.map((item,index)=>{
           return <li key={index}>{item} <button onClick = {this.props.deletetodo.bind(this,index)}>x</button></li>
        });
        
        return (
            <div>
                <input type="text" onChange={this.props.change1}  value = {this.props.text1}/>
                <button onClick={this.props.addtodo}>add</button>
                <div>
                    <ul>{list}</ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todo:state,
        text1: state.text1,
    }
}

const mapDispatchToProps = (dispatch) => ({
    change1: (e) => dispatch({ type:'todoAdd', val1: e.target.value }),
    addtodo: () =>  dispatch({ type:'submithandle' }),
    deletetodo: (index) => dispatch({ type:'deleteTodo', val2: index })
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
