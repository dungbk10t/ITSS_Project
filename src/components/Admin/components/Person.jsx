import React from 'react';

const Person = (props) => {
    const { person} = props;
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.core}</td>
            <td>{person.rank}</td>
            <td>
                <input type="checkbox" checked={person.block} onChange={()=>{ props.updateStatus(person.id); }} />
            </td>
        </tr>
    );
}

export default Person;
