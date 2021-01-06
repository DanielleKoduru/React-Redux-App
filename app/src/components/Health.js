import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

const Health = ({ title, data, isfetching, error, fetchData}) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
        <h1>{title}</h1>
        <h2>Covid Data: {data}</h2>
        <button>Get Covid Data</button>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        title: state.title,
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(Health);