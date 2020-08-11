import React from 'react';
import {connect} from 'react-redux';
import {incCount, incCountAsync} from './store/actionCreator';


const Counter = props => {
    return (
        <div>
           <h2>Count: {props.count}</h2> 
           <button onClick={props.inc}>ADD</button>
           <button onClick={props.incAsync}>ADD ASYNC</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
        inc: () => dispatch(incCount()),
        incAsync: () => dispatch(incCountAsync())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);