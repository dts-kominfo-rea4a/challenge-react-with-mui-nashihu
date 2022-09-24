// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {useState} from 'react'

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhotoUrl, setInputPhotoUrl] = useState("");

    const inputNameOnChange = (event) => {
        setInputName(event.target.value);
    };

    const inputPhoneOnChange = (event) => {
        setInputPhone(event.target.value);
    };

    const inputEmailOnChange = (event) => {
        setInputEmail(event.target.value);
    };

    const inputPhotoUrlOnChange = (event) => {
        setInputPhotoUrl(event.target.value);
    };

    const localSubmitHandler = (event) => {
        event.preventDefault();
        props.propsSubmitHandler({
            "name": inputName,
            "phone": inputPhone,
            "email": inputEmail,
            "photoUrl": inputPhotoUrl,
        });
        setInputName("")
        setInputPhone("")
        setInputEmail("")
        setInputPhotoUrl("")
    };

    return (
        <>
            <form action="" onSubmit={localSubmitHandler}>
                <input onChange={inputNameOnChange}></input>
                <input onChange={inputPhoneOnChange}></input>
                <input onChange={inputEmailOnChange}></input>
                <input onChange={inputPhotoUrlOnChange}></input>
                <button type='submit'>tambah</button>
            </form>
        </>
    );
}

export default ContactForm;