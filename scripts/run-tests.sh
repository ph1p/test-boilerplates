#!/bin/bash

test_root=$PWD

cd $test_root/ava-example
npm ci
npm test
npm run test:coverage

cd $test_root/jasmine-example
npm ci
npm test
npm run test:coverage

cd $test_root/jest-example
npm ci
npm test
npm run test:coverage

cd $test_root/mocha-example
npm ci
npm test
npm run test:coverage