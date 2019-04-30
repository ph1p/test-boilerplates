#!/bin/bash

test_root=$PWD

cd $test_root/ava-example
npm i
npm test
npm run test:coverage

cd $test_root/jasmine-example
npm i
npm test
npm run test:coverage

cd $test_root/jest-example
npm i
npm test
npm run test:coverage

cd $test_root/mocha-example
npm i
npm test
npm run test:coverage