import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './HomeSection.css'

function HomeSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart }) 
    
    {
    return (
        <>

            <div className={lightBg ? 'home__home-section' : 'home__hero-section darkBg'}></div>
            <h1>Test</h1>
            <div className="container"><div className="row home__home-row"></div>
            
        </>
    )
}

export default HomeSection
