import { useState } from 'react';
import { PhoneInput as PhoneInputReact } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function Phone() {
    const [phone, setPhone] = useState('');

    return (
            <PhoneInputReact
                defaultCountry="uk"
                value={phone}
                onChange={(phone) => setPhone(phone)}
            />
    );
};
