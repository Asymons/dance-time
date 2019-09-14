import axios from 'axios';

const host = 'http://localhost:3000/';

export const call = async (url, params) => {
    const data = await axios.get(`${host}${url}`, { params });
    return data;
};

export const post = (url, options) => {
    return axios.post(`${host}${url}`, options);
};

export const postFile = (url, file) => {
    const data = new FormData();
    data.append('file', file, file.name);

    return axios.post(`${host}${url}`, data, {
        headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        },
        timeout: 30000,
    });
};
