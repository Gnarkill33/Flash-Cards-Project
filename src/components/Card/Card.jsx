import React from 'react'
import styles from './card.module.css'

function Card(props) {
    return (
        <div className={styles.container}>
            <div className='card__top'>
                <h2 className='card__word'>react</h2>
                <p className='card__transcription'>[rɪ'ækt]</p>
            </div>
            <p className='card__translation'>показать перевод</p>
        </div>
    )
}

export default Card