document.getElementById('getText').addEventListener('click', getText);
        document.getElementById('getUsers').addEventListener('click', getUsers);
        document.getElementById('getPosts').addEventListener('click', getPosts);
        document.getElementById('addPosts').addEventListener('click', addPosts);
         /*
        Get Text
        */
        function getText() {
            fetch('./sample.txt')
                .then((res) => res.text())
                .then((data) => {
                    document.getElementById('output').innerHTML = data;
                })
                .catch((err) => console.log(err));
        }
        /*
        Get Users
        */
        function getUsers() {
            fetch('./users.json')
                .then((res) => res.json())
                .then((data) => {
                    let output = '<h2>Users</h2>' + '<br>' + '<p class="mb-4">A sample list of users from a .json file!</p>';
                    //console.log(data);
                    data.forEach(function (user) {
                        output += `
                    <ul class="list-group mb-3">
                        <li class="list-group-item">Id: ${user.id}</li>
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                    </ul>
                   `
                            ;
                    });
                    document.getElementById('output').innerHTML = output;
                })
                .catch((err) => console.log(err));
        }

        /*
        Get posts
        */
        function getPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => res.json())
                .then((data) => {
                    let output = '<h2>Posts</h2>' + '<br>' + '<p class="mb-4">A sample data post from an API! (JSONPlaceholder)</p>';
                    //console.log(data);
                    data.forEach(function (post) {
                        output += `
                    <div class="card card-body mb-3">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>

                    </div>
                   `
                            ;
                    });
                    document.getElementById('output').innerHTML = output;
                })
                .catch((err) => console.log(err));
        }

        /*
        Add posts
        */
        function addPosts(event) {
            event.preventDefault();

            let title = document.getElementById('title').value;
            let body = document.getElementById('body').value;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                headers: {

                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                },

                body: JSON.stringify({ title: title, body: body })

            })

                .then((res) => res.json())
                .then((data) => console.log(data))

        }