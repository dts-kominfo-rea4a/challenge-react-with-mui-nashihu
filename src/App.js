import {useState} from 'react';

import './App.css';
import Header from './components/Header.js';
import Contact from './components/Contact.js';
import contacts from './data/contacts.json';
import ContactForm from './components/ContactForm.js';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [_contacts, addContact] = useState(contacts);

  const formSubmitHandler = (contact) => {
    console.log("todo dari parent", contact);
    addContact([..._contacts, contact]);
  };

  return (
    <div className="App">
      <Header></Header>
      <ContactForm propsSubmitHandler={formSubmitHandler}></ContactForm>
      {_contacts.map((c) => {
        return <Contact data={c}></Contact>
      })}
    </div>
  );
};

export default App;
