# Concepts-1 Assignment

---

##  HTTP Methods & HTTP Status Codes : 

###  HTTP Methods

**GET** – Retrieve data from the server (e.g., fetching quotes). <br>
**POST** – Send data to the server (e.g., submitting a form). <br>
**PUT** – Update existing data.<br>
**DELETE** – Remove data.<br>

###  HTTP Status Codes
**200 OK** – Request was successful.<br>
**201 Created** – Resource successfully created.<br>
**400 Bad Request** – Client sent an invalid request.<br>
**404 Not Found** – Requested resource not found.<br>
**500 Internal Server Error** – Server encountered an error.<br>

---

##  CSS Selectors : 

Here are 4 commonly used CSS selectors:

1. **Element Selector**  
   Targets HTML elements directly.  

   ```css
   p { 
    color: blue; 
    }

    ```

2. **Class Selector**
    Targets elements with a specific class.
    ```css
    .box { 
        border: 1px solid black; 
        }
    ```

3. **ID Selector**
    Targets an element with a specific ID.
    ```css
    #header { 
        font-size: 24px; 
        }
    ```

4. **Group Selector**
    Applies the same styles to multiple elements.
    ```css
    h1, h2, h3 { 
        font-family: Arial;
        }
    ```

---

## Git Basics :

<li>git init – Initialize a new Git repository.</li>
<li>git add . – Stage all changes for the next commit.</li>
<li>git commit -m "message" – Commit staged changes with a message.</li>
<li>git push – Upload local changes to a remote repository.</li>
<li>git pull – Fetch and merge changes from the remote.</li>
<li>git clone <repo-url> – Create a local copy of a remote repo.</li>
<li>git branch – List, create, or delete branches.</li>

---

## Callback & Higher-Order Function :

### Callback Function:
A function passed as an argument to another function.
```javascript
function greet(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

processUserInput(greet); // Hello, Alice

```

### Higher-Order Function:
A function that takes one or more functions as arguments or returns a function.
```javascript

 function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

```

## JavaScript Array Methods :

<li> filter()- reutrns a new array with elements that match a condition </li>

```javascript
    const numbers = [1, 2, 3, 4];
    const even_number = numbers.filter(n => n % 2 === 0); // [2, 4]
```

<li> map() – Transforms each element and returns a new array.</li>

```javascript 
    const nums = [1, 2, 3];
    const squared_num = nums.map(n => n * n); // [1, 4, 9]
```

<li>forEach() – Executes a function on each array element.</li>

```javascript
    nums.forEach(n => console.log(n));
```
<li>push() – Adds an element to the end of the array.</li>

```javascript
    nums.push(4); // [1, 2, 3, 4]
```

<li>pop() – Removes the last element of the array.</li>

```javascript
    nums.pop(); // [1, 2, 3]
```






