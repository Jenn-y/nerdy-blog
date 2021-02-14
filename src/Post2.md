## What is React?

*React* is a JavaScript library for building user interfaces. It is the view layer for web applications.

At the heart of all React applications are components. A component is a self-contained module that renders some output. We can write interface elements like a button or an input field as a React component. Components are composable. A component might include one or more other components in its output.

!["logo"](https://blog.jscrambler.com/content/images/2018/06/little-known-things-react.png)

Broadly speaking, to write React apps we write React components that correspond to various interface elements. We then organize these components inside higher-level components which define the structure of our application.

For example, take a form. A form might consist of many interface elements, like input fields, labels, or buttons. Each element inside the form can be written as a React component. We'd then write a higher-level component, the form component itself. The form component would specify the structure of the form and include each of these interface elements inside of it.

For instance, the Hello world example of a React website can be as simple as:


    ```js
    <html>
        <head>
            <meta charset="utf-8">
            <title>Hello world</title>
            <!-- Script tags including React -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></script>
            <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        </head>
        <body>
            <div id="app"></div>
            <script type="text/babel">
                ReactDOM.render(
                <h1>Hello world</h1>,
                document.querySelector('#app')
                );
            </script>
        </body>
    </html>
    ```

For more information, visit: [React Website](https://reactjs.org)