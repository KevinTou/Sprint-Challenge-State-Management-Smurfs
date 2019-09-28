1. What problem does the context API help solve?
   > The context API allows us the ability to wrap a component chain with a provider and use state anywhere within the chain without having to "prop-drill".
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   > The store is known as the "single source of truth" because it holds the state of the application. Actions are dispatched to the reducers, which alter then alters the state accordingly.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   > The application state is the state of the entire application where as component state is relative to a single component. It would be good to generally use application state, unless you needed something like a form, which would use component state.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   > "Redux-thunk" is a middleware that allows us to do async redux. It makes our "action-creators" return a function instead.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   > My favorite state management system so far is Redux. Even though there is a lot of set-up and could be easily messed up, I like the fact that you are able to pull state from anywhere by connecting.
