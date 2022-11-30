import axios from "axios";
export const url: string = "http://localhost:3000/api/quality";

export const getQuality = async () => {
    const data = await axios.get(url);
    return data;
}