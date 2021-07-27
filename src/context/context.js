import React, { useEffect, useState } from 'react'

export const context = React.createContext();

const ContextProvider = (props) => {

    const [data, setData] = useState([]);

    const [expectedId, setExpectedId] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const updateData = (data) => {
        setData(data);
    }

    const handleExpectedId = (id) => {
        setExpectedId(id);
    }

    return (
        <context.Provider value={{ data, updateData, expectedId, handleExpectedId }}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider;