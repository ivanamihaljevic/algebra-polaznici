var StepCounter = (function () {
    var _steps = 0;

    function walk() {
        _steps++;
    }

    function getTotalSteps() {
        return _steps;
    }

    return {
        walk: walk,
        getTotalSteps: getTotalSteps,
    };
})();

console.log(StepCounter.getTotalSteps());
StepCounter.walk();
console.log(StepCounter.getTotalSteps());

module.exports = StepCounter;
