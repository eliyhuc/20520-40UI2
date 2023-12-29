import React from 'react'

const User = (props) => {

    //Code

    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{props.user.name}</div>
                {props.user.username} | {props.user.email}
            </div>
            <span class="badge bg-primary rounded-pill">{props.user.id}</span>
        </li>
    )
}

export default User