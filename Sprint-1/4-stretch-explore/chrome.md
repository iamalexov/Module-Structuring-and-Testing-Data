Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
<<<<<<< HEAD
### answer:
Calling alert("Hello world!") displays a popup message box with the text “Hello world!”

=======
>>>>>>> main

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
<<<<<<< HEAD
### answer:
Calling prompt("What is your name?") opens a popup window that asks the user to type a response.
The browser waits until the user enters text and clicks OK or Cancel


What is the return value of `prompt`?
### answer:
The return value of prompt is the text that the user types into the input box.
If the user clicks Cancel, the function returns null

=======
What is the return value of `prompt`?
>>>>>>> main
