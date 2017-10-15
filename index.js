import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import "./assets/style.css";
import defaultBgImage from "./assets/300x350.png";

export default class AlefCard extends Component {

    toggleCard() {
        if (this.props.cardId === this.props.activeCardId)
            return this.props.setActiveCardId(null);

        this.props.setActiveCardId(this.props.cardId);
    }

    render() {

        const {subjectCode, title, description, link, lang, thumbnailUrl, cardId, activeCardId, } = this.props;

        let bgImageStyle = {
            backgroundImage: `url(${thumbnailUrl || defaultBgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        };

        const isFlipped = cardId === activeCardId;

        const backCardClasses = ['side', 'alef-card-back', `bg-${subjectCode}`].join(" ");
        const cardClasses = ["alef-card", `alef-card-${lang}`, isFlipped ? "flip-alef-card" : ""].join(" ");

        return (
            <div className="alef-card-container">
                <div onClick={() => this.toggleCard()} className={cardClasses}>
                    <div className="side">
                        {this.props.frontChildren || <div>
                            <div style={bgImageStyle} className="alef-card-bg" >
                                {title ? <div className="alef-card-title" >{title}</div> : null}
                            </div>
                            <div className="alef-card-info" >
                                <div className="alef-card-description" >
                                    {description || "Card description goes here"}
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className={backCardClasses}>
                        <Link to={link}>
                            {this.props.backChildren || "Card back content goes here"}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

AlefCard.propTypes = {
    link: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    subjectCode: PropTypes.string,
    lang: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    cardId: PropTypes.string,
    setActiveCardId: PropTypes.func,
    activeCardId: PropTypes.string
};