import React from 'react'

const MessageCard = ({ user, image, date, latestMessage, isRead }) => {
  return (
    <article className='message-card'>
        <header>
            <img src={image} alt='user_picture' />

            <div className="message-info">
                <p>{user}</p>
                <span>{date}</span>

                <div className="message-body">
                    {latestMessage}
                </div>
            </div>
        </header>

        {!isRead && (
            <span className="new"></span>
        )}
    </article>
  )
}

export default MessageCard