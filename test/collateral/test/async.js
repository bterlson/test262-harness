/*---
description: Async test
expected:
  pass: true
features: [A]
flags: [async]
---*/

var p = new Promise(function(resolve) {
  resolve();
});

p.then($DONE, $DONE);
