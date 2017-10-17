# React Card Flippable


## Usage

See the [demo here](https://plnkr.co/edit/3QbdTUWfWjf4cVTzaJmx?p=preview)

### Basic

```javascript
import React, {Component} from 'react';
import './App.css';
import CardFlippable from 'react-card-flippable';

class App extends Component {

    render() {

        let title = "Today News";
        let description = "Today is nice weather in Abu Dhabi";
        let thumbnailUrl = "http://oi65.tinypic.com/28unxug.jpg";

        return (
            <div>
                <CardFlippable title={title} description={description} thumbnailUrl={thumbnailUrl}/>
            </div>
        );
    }
}

export default App;


```

### Advance
```javascript
import React, {Component} from 'react';
import CardFlippable from 'react-card-flippable';

class App extends Component {

    render() {

        const frontContent = <div>Here goes the description</div>;
        const backContent = <div>Here goes the info for the back card</div>;


        return (
            <div>
                <CardFlippable frontContent={frontContent} backContent={backContent} />
            </div>
        );
    }
}

export default App;


```