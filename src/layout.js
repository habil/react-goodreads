import React from 'react'
import './layout.css'

const Layout = (props) => {
    return ( 
        <div>
            <table>
                <thead>
                <tr>
                    <th scope="col">Book Cover</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Started At</th>
                    <th scope="col">Rating</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td data-label="Book Cover"><img src={props.cover}/></td>
                    <td data-label="Book Name"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a></td>
                    <td data-label="Started At">{props.started}</td>
                    <td data-label="Rating">{props.rating}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Layout;