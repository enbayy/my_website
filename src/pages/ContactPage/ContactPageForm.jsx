import React from 'react'
import '../../css/ContactPageForm.css'

function ContactPageForm() {
    return (

        <form className='form-main'>
            <div className='form'>
                İsim:
                <input type="text" placeholder='İsim' />
                Soyisim:
                <input type="text" placeholder='Soyisim' />
                E-mail:
                <input type="text" placeholder='E-mail' />
                Metin:
                <textarea placeholder="Metin Giriniz"></textarea>
            </div>
        </form>

    )
}

export default ContactPageForm