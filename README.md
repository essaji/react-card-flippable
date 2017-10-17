# React Card Flippable

## Usage

### Basic

```
import CardFlippable from 'react-card-flippable';

...

    render() {
        <CardFlippable />
    }
...

```

### Advance
```
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