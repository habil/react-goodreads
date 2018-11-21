import React from 'react'
import { css } from 'glamor'

let a = css({
        color: 'black',
        position: 'relative',
        textDecoration: 'none',
        ':hover': {
          cursor: 'pointer'
        },
        ':active': {
          top: '5px'
        }
  })

let tablecss = css({
        border: '1px solid #ccc',
        borderCollapse: 'collapse',
        margin: 0,
        padding: 0,
        width: '100%',
        tableLayout: 'fixed',
        '@media(max-width: 600px)': {
            bordor: 0,
        }
        });

let  tr = css({
        backgroundColor: '#f8f8f8',
        border: '1px solid #ddd',
        padding: '.35em',
        '@media(max-width: 600px)': {
            borderBottom: '3px solid #ddd',
            display: 'block',
            marginBottom: '.625em'
        }
        });
let   td = css ({
        padding: '.625em',
        textAlign: 'center',
        '@media(max-width: 600px)': {
            borderBottom: '1px solid #ddd',
            display: 'block',
            fontSize: '1em',
            textAlign: 'right',
            ':before' :{
                content: 'attr(data-label)',
                float: 'left',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            },
            ':last-child ' : {
                borderBottom: 0
            }
        }
        });
let   th  = css({
        padding: '.625em',
        textAlign: 'center',
        fontSize: '.85em',
        letterSpacing: '.1em',
        textTransform: 'uppercase'
        });
let thead = css({
    '@media(max-width: 600px)': {
        border: 'none',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px'
    }
});


const Layout = (props) => {
    return ( 
        <div>
            <table {...tablecss}>
                <thead {...thead}>
                <tr {...tr}>
                    <th {...th} scope="col">{props.bookCoverTitle !== undefined ? props.bookCoverTitle : 'Book Cover'}</th>
                    <th {...th} scope="col">{props.bookNameTitle !== undefined ? props.bookNameTitle : 'Book Name'}</th>
                    <th {...th} scope="col">{props.startAtTitle !== undefined ? props.startAtTitle : 'Started At'}</th>
                    <th {...th} scope="col">{props.ratingTitle !== undefined ? props.ratingTitle : 'Rating'}</th>
                </tr>
                </thead>
                <tbody>
                <tr {...tr}>
                    <td scope="row" {...td} data-label={props.bookCoverTitle !== undefined ? props.bookCoverTitle : 'Book Cover'}><img src={props.cover}/></td>
                    <td {...td} data-label={props.bookNameTitle !== undefined ? props.bookNameTitle : 'Book Name'}><a {...a} href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a></td>
                    <td {...td} data-label={props.startAtTitle !== undefined ? props.startAtTitle : 'Started At'}>{props.started}</td>
                    <td {...td} data-label={props.ratingTitle !== undefined ? props.ratingTitle : 'Rating'}>{props.rating}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Layout;