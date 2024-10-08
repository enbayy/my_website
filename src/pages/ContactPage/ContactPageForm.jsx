import React from 'react'
import '../../css/ContactPageForm.css'
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function ContactPageForm() {
    return (
        <form className='form-main'>
            <div className='text'>İletişim</div>
            <div className='info-main'>
                <div className='info'>
                    <div className='icon'>
                        <FaLocationArrow />
                    </div>
                    <div className='name'>
                        Adres
                    </div>
                    <div className='desc'>
                        İzmir
                    </div>
                </div>
                <div className='info'>
                    <div className='icon'>
                        <IoMdMail />
                    </div>
                    <div className='name'>
                        E-mail
                    </div>
                    <div className='desc'>
                        1enesbayar@gmail.com
                    </div>
                </div>
                <div className='info'>
                    <div className='icon'>
                        <FaPhone />
                    </div>
                    <div className='name'>
                        Telefon
                    </div>
                    <div className='desc'>
                        0 552 231 2086
                    </div>
                </div>
            </div>
            <div className='form'>
                <div className='row'>
                    <input type="text" placeholder='İsim' />
                    <input type="text" placeholder='E-mail' />
                </div>
                <textarea placeholder='Mesaj'></textarea>
            </div>
            <div className='buttons'>
                <button className='button-send'>Gönder</button>
            </div>
        </form>
    )
}

export default ContactPageForm