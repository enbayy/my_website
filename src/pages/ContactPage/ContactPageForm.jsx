import React from 'react'
import '../../css/ContactPageForm.css'

function ContactPageForm() {
    return (

        <form className='form-main'>
            <div className='text'>İletişim</div>
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
            <div className='buttons'>
                <button className='button-clear'>Temizle</button>
                <button className='button-send'>Gönder</button>
            </div>
        </form>

    )
}

export default ContactPageForm