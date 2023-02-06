var Exercise = (function () {
    var steps = 0;
    function increaseSteps() {
        steps++;
    }
    return {
        getTotalSteps: function () {
            return steps;
        },
        walk: function () {
            increaseSteps();
        }
    };
}());

module.exports = Exercise;

