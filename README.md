# Live Demo:
https://launch2022.vercel.app/

# Live Storybook:
https://www.chromatic.com/library?appId=635b193538b662c914899e81

### Tested with Chrome and Safari on a Macbook

## For code quality and styling this project has pre-commit hooks setup to automatically check code as it is commited. If there are errors then it is rejected. This is achieved using the following packages:
+ husky
+ elint
+ prettier
+ lint-staged

## Animation
The animation in this project is achieved using framer-motion

## Styling
Styling is done via styled-components

## Github Actions
I've used a github action to run chromatic checks on each PR. What is Chromatic? find out: https://www.chromatic.com/
View PR builds: https://www.chromatic.com/builds?appId=635b6b51b8460796fdfbc30d

## Testing
There is a simple example of a cypress e2e test in the project. I will try to find time to add an example of react-testing-library tests

## Notes
+ There are a few ignore prettier warnings. These were added right at the end of the project as I was getting build errors when trying to host my project on vercel. The automatic prettier setup I added via husky was clashing with my local rules. This is probably simply due to an incorrect extension being added somewhere...
+ I did not create the star background myself, this comes from https://codepen.io/jensaxena/pen/KQmvoK
+ I did not create the PropertyNormalizerUtility, I felt this was needed for the project as I wanted to follow convention and use camelCase, but for a take home test did not want to spend too much time re-inventing the wheel. Credit here: https://medium.com/swlh/dont-let-api-data-structure-your-javascript-application-7fa7fd5a590f

## Things that could be improved
+ import aliasing
+ i'm pretty sure the SSR could be improved. The new data fetching approach in Next 13 https://nextjs.org/blog/next-13#data-fetching (which was only released a couple of days ago) looks great and i'll probably convert this project to a Next 13 at some point...

