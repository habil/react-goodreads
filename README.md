# react-goodreads

> react-goodreads is a React-component for Goodreads read shelf.

[![Build Status](https://travis-ci.org/habil/react-goodreads.svg?branch=master)](https://travis-ci.org/habil/react-goodreads)
[![npm](https://img.shields.io/npm/v/react-goodreads.svg)](https://www.npmjs.com/package/react-goodreads)
[![npm](https://img.shields.io/npm/dm/react-goodreads.svg)](https://www.npmjs.com/package/react-goodreads)
[![npm](https://img.shields.io/npm/l/react-goodreads.svg)](https://www.npmjs.com/package/react-goodreads)
[![demo](https://img.shields.io/badge/LiveDemo-ClickHere-ff69b4.svg)](https://www.habil.io/books/)


# 1. Install

```shell
npm install --save react-goodreads
```

# 2. Usage

Grab your Goodreads developer's key from [here](https://www.goodreads.com/api/keys) .

Also you can use .env configuration for this.

```jsx
import React, { Component } from 'react';
import GoodReads from 'react-goodreads';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <GoodReads apikey="yourApiKey"/>
        </header>
      </div>
    );
  }
}

export default App;
```

# 3. TODO

 - Custom styling

# LICENSE

MIT@[habil](https://github.com/habil).

