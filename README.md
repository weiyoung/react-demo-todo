# Todo demo

Welcome to my super cool todo app!

## Things I learned

- UseState()
  - used to get todos and setTodos.
- UseEffect()
  - used for storing todos in localStorage and retrieving them.
  - empty dependency array will run hook only once (at the start). this was used to getItem.
  - if filled, everytime the dependency arry is changed, the hook will run. this was used to setItem.
- UseRef()
  - used to refer to input box.
- that each item in a list needs to have a unique key. I used Math.random() to generate a unique key for each item.

