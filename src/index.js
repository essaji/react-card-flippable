import React, {Component} from 'react';
import PropTypes from 'prop-types'
import "../assets/style.css";

const DEFAULT_COLOR = "rgb(147, 204, 232)";

export default class CardFlippable extends Component {

    constructor() {
        super();
        this.state = {isFlipped: false};
    }

    toggleCard() {
        if (this.props.cardId === this.props.activeCardId)
            return this.setState({isFlipped: !this.state.isFlipped});

        this.props.setActiveCardId(this.props.cardId);
    }

    render() {

        const {title, description, thumbnailUrl, cardId, activeCardId, disableFlip, backContent, frontContent } = this.props;

        let bgImageStyle = {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        };

        if(thumbnailUrl)
            bgImageStyle["backgroundImage"] = `url(${thumbnailUrl})`;
        else
            bgImageStyle["backgroundColor"] = DEFAULT_COLOR;

        const isFlipped = this.state.isFlipped;

        const backCardClasses = ['side', 'alef-card-back'].join(" ");
        const cardClasses = ["alef-card", isFlipped ? "flip-alef-card" : ""].join(" ");

        return (
            <div className="alef-card-container">
                <div onClick={() => {if(!disableFlip) this.toggleCard()}} className={cardClasses}>
                    <div className="side">
                        {frontContent || <div>
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
                        {backContent || <div style={{color: "white", backgroundColor: DEFAULT_COLOR, height: "100%", padding: "10px"}} >Click to flip back</div>}
                    </div>
                </div>
            </div>
        )
    }
}

CardFlippable.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    thumbnailUrl: PropTypes.string,
    cardId: PropTypes.string,
    setActiveCardId: PropTypes.func,
    activeCardId: PropTypes.string,
    frontContent: PropTypes.object,
    backContent: PropTypes.object,
};