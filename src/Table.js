import React, { useState, useEffect } from "react";

const Table =({ users }) => {

    //setting the state

    const [sortedUsers, updatedSortedUsers] = useState([]);
    useEffect(() => updatedSortedUsers(users), [users]);

    //setting up the table and display categories//

    return(
        <div>
            <table className="table">
                <thread>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col" onClick={() => {
                            const usersCopy = [...users];
                            const updateSort = usersCopy.sort((a, b) => {
                                const nameA = a.name.first;
                                const nameB = b.name.first;
                                    if( nameA < nameB) {
                                        return -1;
                                    }
                                    if( nameA < nameB) {
                                        return 1;
                                    }
                                    return 0;
                            });
                            updatedSortedUsers(updateSort);
                        }}
                        >
                            First
                        </th>
                        <th scope="col">Last</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Cell</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Country</th>
                        <th scope="col">Postal Code</th>
                        <th scope="col">Picture</th>
                    </tr>
                </thread>
                <tbody>
                    {sortedUsers.map(
                        ({
                            location: { city, state, country, postcode },
                            picture: { thumbnail },
                            cell,
                            phone,
                            gender,
                            email,
                            name: { first, last, title }
                        }) => (
                            <tr key={ email }>
                                <td> { title } </td>
                                <td> { first } </td>
                                <td> { last } </td>
                                <td> { gender } </td>
                                <td> { email } </td>
                                <td> { phone } </td>
                                <td> { cell } </td>
                                <td> { city } </td>
                                <td> { state } </td>
                                <td> { country } </td>
                                <td> { postcode } </td>
                                <td>
                                    <img src={ thumbnail } alt="" />
                                </td>
                            </tr>
                        )
                    )};
                </tbody>
            </table>
        </div>
    );
};

export default Table;