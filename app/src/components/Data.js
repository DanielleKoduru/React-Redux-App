import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

const Data = ({ title, value, isfetching, error, fetchData}) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
        <h1>{title}</h1>
        <h2>Joke: {value}</h2>
        <button onClick={fetchData}>Get Chuck Norris Joke</button>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        title: state.title,
        value: state.value,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(Data);