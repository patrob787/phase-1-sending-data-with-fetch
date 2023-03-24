function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(resp => resp.json())
    .then((obj) => {
        let body = document.querySelector('body');
        let id = obj.id;
        body.append(id);
    })
    .catch((error) => {
        let body = document.querySelector('body');
        body.append(error.message);
    })
};