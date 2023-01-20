# FreecodecampCourse

I want to upgrade my skills to writing angular applications in addition to React.js. So, My first stop is Freecodecamp for understanding the basics of angular.js.

## Parent-to-child binding using @Input() decorator.

1. we can send data from parent to child by binding the properties with a `Input` decorator. This will make the data dynamic and update in realtime.

2. Using `ViewChild` decorator, this allows the parent component to have access to the child properties and methods.

> NOTE: in order to use this in the parent, the `AfterViewInit` hook is implemented and it is inside this hook that we would have access to the child properties and methods.
