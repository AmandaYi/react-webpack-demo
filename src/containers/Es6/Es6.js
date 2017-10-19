import React, { Component } from 'react';

const comStyles = require('styles/Common.scss');
const styles = require('./scss/Es6.scss');

export default class Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    //  this.testDemo();
  }
  printLine(args) {
    console.log('-------------' + (args || '') + '-------------------');
  }
  testDemo() {
    const arr = [1, 2, 3];
    const [a, b, c] = arr;
    console.log(a, b, c);
    const [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo, bar, baz);
    const [, , third] = ['foo', 'bar', 'baz'];
    console.log(third);
    const [head, ...tail] = [1, 2, 3, 4];
    console.log(head, tail);
    console.log('-----------------------es6 1-------------');
    // const [first, second, third1, fourth, fifth, sixth] = fibs();
    // console.log(first, second, third1, fourth, fifth, sixth);

    function* helloWorldGenerator() {
      yield 'hello';
      yield 'world';
      return 'ending';
    }

    const hw = helloWorldGenerator();
    console.log(hw);

    this.testIterator();
  }
  testIterator() {
    console.log('------------testIterator-------------');
    const makeIterator = (arr) => {
      let nextIndex = -1;
      return {
        next: () => {
          return nextIndex < arr.length ?
            { value: arr[nextIndex += 1], done: false } : { value: undefined, done: true };
        }
      };
    };
    const it = makeIterator(['a', 'b', 'c']);
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    this.printLine('Iterator');

    const arr = [1, 2, 3, 4, 5, 6];
    const iter = arr[Symbol.iterator]();
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    this.printLine('||||||||');

    const obj = (value) => {
      this.value = value;
      this.next = null;
    };
    obj.prototype[Symbol.iterator] = () => {
      let current = this;
      const nexta = () => {
        if (current) {
          const value = current.value;
          current = value;
          return { value, done: false };
        }
        return { done: true };
      };
      const iterator = { next: nexta };
      return iterator;
    };
    const place = 55.03;
    const a = (place * 24000 * 0.92) - 50000;
    const b = a / 2;

    this.printLine(a + ' ' + b);
  }

  render() {
    return (
      <div className={comStyles.navbar + ' ' + styles.page1Css}>
        <div>aecdqqaa</div>
      </div>
    );
  }
}
