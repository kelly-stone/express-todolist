body {
    background: #0d1521;
    font-family: tahoma;
    color: #989898;
}

#todo-table {
    position: relative;
    width: 95%;
    background: #090d13;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

#todo-table form:after {
    margin: 0;
    content: '';
    display: block;
    clear: both;
}

input[type="text"] {
    width: 30%;
    padding: 20px;
    background: #181c22;
    border: 0;
    float: left;
    font-size: 20px;
    color: #989898;
}

button {
    padding: 20px;
    width: 30%;
    float: left;
    background: #23282e;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    font-family: arial;
    font-size: 20px;
    cursor: pointer;
    letter-spacing: 1px;
}

li:hover {
    text-decoration: line-through;
    background: rgba(0, 0, 0, 0.2);
}