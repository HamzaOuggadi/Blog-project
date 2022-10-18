
var axios = require('axios');
// create a function to get users from API using axios
function getUsers() {
    // get the API data using axios
try {
    axios.get('http://localhost:3000/articles').then((response) => {
        // get the data from the API
        const users = response.data;
        var div = document.getElementById('users');
        div.innerHTML = users;
    });
} catch (error) {
    console.log(error)
}

}

getUsers()
