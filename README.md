UIA-SIM for JavaScript, DESim4JS
===

[![Build Status](https://travis-ci.com/uia4w/uia-simjs.svg?branch=master)](https://travis-ci.com/uia4w/uia-simjs)
[![codecov](https://codecov.io/gh/uia4w/uia-simjs/branch/master/graph/badge.svg)](https://codecov.io/gh/uia4w/uia-simjs)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/08f492f5494c4df9bf19119a5e255f37)](https://www.codacy.com/gh/uia4w/uia-simjs/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=uia4w/uia-simjs&amp;utm_campaign=Badge_Grade)
[![License](https://img.shields.io/github/license/uia4j/uia-sim.svg)](LICENSE)

DESim4JS is a JavaScript port of SimPy, __process-based discrete event simulation__ framework.

DESim4JS aims to port the concepts used in SimPy to the JavaScript world.

A simple example:
```js
var env = new desim.Env(); 
var bell = env.event("bell");
env.process("John", function *() {
    while(true) {
        let state = yield bell;
        if(state === "end") {
            console.log("\\o/");
        } else {
            console.log("|o|");
        }
    }
});
env.process("School", function *() {
    while(true) {
        yield env.timeout("in", 40);
        bell.succeed("end");
        bell = env.event("bell");

        yield env.timeout("out", 10);
        bell.succeed("begin");
        bell = env.event("bell");
    }
});

env.run(250);
```
