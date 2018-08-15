import test from "ava";
import { sum, sub } from "../src";

test.serial("typeof sum equal function", t => {
  t.is(typeof sum, "function");
});
test.serial("typeof sub equal function", t => {
  t.is(typeof sub, "function");
});

test.serial("adds 7 + 7 to equal 14", t => {
  t.is(sum(7, 7), 14);
});

test.serial("sub 7 - 7 to equal 0", t => {
  t.is(sub(7, 7), 0);
});

test.serial("adds a + b to equal NaN", t => {
  t.is(sum("a", "b"), NaN);
});

test.serial("sub a - b to equal NaN", t => {
  t.is(sub("a", "b"), NaN);
});

test.serial("no sum() parameters to equal 0", t => {
  t.is(sum(), 0);
});

test.serial("no sub() parameters to equal 0", t => {
  t.is(sub(), 0);
});

test.serial("adds 0 to equal 0", t => {
  t.is(sum(0), 0);
});

test.serial("sub 0 to equal 0", t => {
  t.is(sub(0), 0);
});

test.serial("adds undefined + 0 to equal 0", t => {
  t.is(sum(undefined, 0), 0);
});

test.serial("sub undefined - 0 to equal 0", t => {
  t.is(sub(undefined, 0), 0);
});
