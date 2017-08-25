export const getData = () => {
    return fetch('http://localhost:3000/apiGetData', {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};

export const postData = (current) => {
    return fetch('http://localhost:3000/apiPostData', {
        method: 'post',
        body: JSON.stringify(current),
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};