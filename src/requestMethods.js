import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDQ4ZjNlYmRmMDYxNzA2M2NhNDI2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODk5MjEyMSwiZXhwIjoxNzAxNTg0MTIxfQ.BZVbvJOGpHrelAL3QhSgxvGvcCSoQyMKv4veNhu2FUw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer${Token}`}
});