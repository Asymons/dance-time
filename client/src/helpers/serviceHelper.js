import axios from 'axios';

const host = 'http://localhost:3000/';

export const call = async (url, params) => {
    const data = await axios.get(`${host}${url}`, { params });
    return data;
};

export const post = (url, options) => {
    return axios.post(`${host}${url}`, options);
};

export const postFile = (url, file, username) => {
    const data = new FormData();
    console.log(file);
    const mp4File = new Blob([file], {type: 'video/mp4'});
    data.append('upl', mp4File, username + '.mp4');
    console.log(data, file);
    return axios.post(`${host}${url}`, data);
};
