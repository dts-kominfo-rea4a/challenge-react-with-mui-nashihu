// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
        <img src={data.photo} height="100" alt=''></img>
        <h2>{data.name}</h2>
        <h3>{data.phone}</h3>
        <h4>{data.email}</h4>
    </>);
};

export default Contact;
