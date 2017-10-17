# React Card Flippable

## Installation

`npm install react-card-flippable --save`


## Basic Usage

```javascript
import React, {Component} from 'react';
import CardFlippable from 'react-card-flippable';

class App extends Component {

    render() {

        const title = "Today News";
        const description = "Today is nice weather in Abu Dhabi";
        const thumbnailUrl = "http://oi65.tinypic.com/28unxug.jpg";
        const backContent = <div><h3>Click to flip back</h3></div>;

        return (
            <div>
                <CardFlippable title={title} description={description} thumbnailUrl={thumbnailUrl} backContent={backContent} />
            </div>
        );
    }
}

```

See the [demo here](https://plnkr.co/edit/3QbdTUWfWjf4cVTzaJmx?p=preview)

Or you might wanna replace the whole front end content.

```javascript
import React, {Component} from 'react';
import CardFlippable from 'react-card-flippable';

class App extends Component {

    render() {

        const frontContent = <div><h3>Front content goes here</h3></div>;
        const backContent = <div><h3>Back content goes here</h3></div>;

        return (
            <div>
                <CardFlippable frontContent={frontContent} backContent={backContent} />
            </div>
        );
    }
}
```

## Properties

| Props        | Type    | Description                                                                                               |
|--------------|---------|-----------------------------------------------------------------------------------------------------------|
| title        | string  | Title of the card                                                                                         |
| description  | string  | Description to be displayed under the card                                                                |
| thumbnailUrl | string  | Url to the image of the card                                                                              |
| disableFlip  | boolean | Setting it to true disables the flip of card on click                                                     |
| frontContent | object  | JSX content to be rendered on card front. <br> **Note**: using this prop will replace the default card behavior |
| backContent  | object  | JSX content to be rendered on the back of the card                                                        |