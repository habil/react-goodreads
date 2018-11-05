# react-goodreads# react-adsense

> react-goodreads is a React-component for Goodreads.

[![Build Status](https://travis-ci.org/hustcc/react-goodreads.svg?branch=master)](https://travis-ci.org/habil/react-goodreads)
[![npm](https://img.shields.io/npm/v/react-adsense.svg)](https://www.npmjs.com/package/react-goodreads)
[![npm](https://img.shields.io/npm/dm/react-goodreads.svg)](https://www.npmjs.com/package/react-adsense)
[![npm](https://img.shields.io/npm/l/react-goodreads.svg)](https://www.npmjs.com/package/react-goodreads)
[![demo](https://img.shields.io/badge/LiveDemo-ClickHere-ff69b4.svg)](http://git.hust.cc/react-goodreads/)


# 1. Install

```shell
npm install --save react-goodreads
```


# 2. Usage

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


# 3. Props

 - Required props:
   - `client`
   - `slot`
 - Optional props:
   - `className`:
   - `style`:
   - `layout`:
   - `format`:
   - `responsive`:


# 4. TODO

 - `Baidu` advertisement supported.


# LICENSE

MIT@[hustcc](https://github.com/hustcc).

