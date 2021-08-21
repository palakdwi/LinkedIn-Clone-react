import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-left">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    )

    return (
        <div className="widgets">
            <div className="widgets-header">
                <h2>LinkedInNews</h2>
                <InfoIcon/>
            </div>
            {newsArticle('Are hikes, promotions on thier way?','3d ago 9k readers')}
            {newsArticle('Are hikes, promotions on thier way?','3d ago 9k readers')}
            {newsArticle('Are hikes, promotions on thier way?','3d ago 9k readers')}
            {newsArticle('Are hikes, promotions on thier way?','3d ago 9k readers')}
        </div>
    )
}

export default Widgets
