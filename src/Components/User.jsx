import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Post from './Post';
const User = () => {
    const [users, setUsers] = useState([]);
    const [click, setClick] = useState('')
    const getData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{ padding: 50 }}>
            <Container>
                <UncontrolledDropdown>
                    <DropdownToggle caret color="dark" >
                        Choose a user
                     </DropdownToggle>
                    <DropdownMenu dark>
                        {
                            users && users.map((item) => {
                                return <DropdownItem key={item.id}>
                                    <option value={item.id} onClick={(e) => setClick(e.target.value)}>{item.name}</option>
                                </DropdownItem>
                            })
                        }

                    </DropdownMenu>
                </UncontrolledDropdown>
                <div>
                    <h2 style={{ paddingTop: 50 }}> Choose a user and see post's</h2>
                    {
                        click ==''? <p>You have not selected option . Select option ! </p>:<></>
                    }
                    <Post dataId={click} />
                </div>
            </Container>
        </div>
    )
}

export default User
