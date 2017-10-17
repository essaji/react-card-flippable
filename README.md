# React Card Flippable

## Usage

### Basic

```javascript
import React, {Component} from 'react';
import './App.css';
import CardFlippable from 'react-card-flippable';

class App extends Component {

    render() {

        let title = "Today News";
        let description = "Today is nice weather in Abu Dhabi";
        let thumbnailUrl = "http://www.girlsgetaway.com/wp-content/uploads/2014/05/abu3_300x350.jpg";

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