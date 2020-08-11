import React from 'react';
import {connect} from 'react-redux';
import {loadPosts} from './store/actionCreator';


const PostList = props => {
    console.log(props);
    return (
        <div>
            <button onClick={props.load} disabled={props.loading}>Load</button>
            {
                props.loading
                ? <h2>Loading...</h2>
                : <ul>
                    {props.posts.map((p,i) => <li key={i}>{p.title}</li>)}
                </ul>
            }
            {
                props.error ? <h3>Error: {props.error}</h3> : null
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts:state.posts.posts,
        error:state.posts.error,
        loading:state.posts.loading
    }
}

const mapDispatrchToProps = dispatch => {
    return {
        load: () => dispatch(loadPosts())
    }
}

export default connect(mapStateToProps,mapDispatrchToProps)(PostList);