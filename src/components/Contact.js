import React from 'react'


export default function Contact(contact) {
    let badgeText
    if (contact.openspot === 0) {
        badgeText = "New"
    } else  {
        badgeText = "Sold out"
    }
    return (
       
        <div className='content'>
            <div className='contacts'>
                <div className='contact-card'>
                    {badgeText && <div className='card--badge'>{badgeText}</div>}
                    <img src={contact.img} alt='' />
                    <h4>{contact.name}</h4>
                    <div className='info-group'>
                        <p>{contact.phone}</p>
                    </div>
                    <div className='info-group'>
                        <p>{ contact.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}