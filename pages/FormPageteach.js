import React, { useState } from 'react';
import "../styles/FormPage.css";
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const FormPageteach = () => {
    // State for edit mode, phone number, and email
    const [isEditMode, setIsEditMode] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('+306972526991');
    const [email, setEmail] = useState('agapiioannidou@di.uoa.gr');

    // Function to create form rows
    const createFormRow = (labelText, valueText, isEditable) => (
        <div className="form-row">
            <label>{labelText}:</label>
            {isEditable && isEditMode ? (
                <input 
                    type="text" 
                    value={isEditable === 'phone' ? phoneNumber : email}
                    onChange={(e) => isEditable === 'phone' ? setPhoneNumber(e.target.value) : setEmail(e.target.value)}
                />
            ) : (
                <span>{valueText}</span>
            )}
        </div>
    );

    // Toggle edit mode
    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <div className="form-container">
            <div className="icon-container">
                <AccountCircleIcon style={{ fontSize: '100px'}} /> 
            </div>
            <div className="header">
                Αγάπη Ιωαννίδου - Καθηγήτρια 
                <button onClick={handleEditClick}>Επεξεργασία <EditIcon/></button>
            </div>
            <div>
                {createFormRow('Τμήμα', 'Σχολή Πληροφορικής και Τηλεπικοινωνιών')}
                {createFormRow('Όνομα', 'Αγάπη')}
                {createFormRow('Επίθετο', 'Ιωαννίδου')}
                {createFormRow('Ημερομηνία Γέννησης', '01/01/2002')}
                {createFormRow('AMKA', '01010205389')}
                {createFormRow('Α.T.', 'AM 151719')}
                {createFormRow('Τηλέφωνο', phoneNumber, 'phone')}
                {createFormRow('email', email, 'email')}
            </div>
        </div>
    );
};

export default FormPageteach;
