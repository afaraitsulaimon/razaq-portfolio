import React from 'react'

const ButtonMailTo = ({mailto}) => {
    return(
        <button 
        to="#"
        onClick={(e) => {
            e.preventDefault()
            window.location.href = mailto
        }} > Send Mail</button>
    )
}