var SLIDE_DURATION = 15;
var FOLD_WIDTH = 80;
var SLIDE_STEP = FOLD_WIDTH / SLIDE_DURATION;
var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
})(Direction || (Direction = {}));
