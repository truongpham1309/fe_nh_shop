import axios from "axios";

export const uploadImage = async (files: any[]) => {
    const PRESET_NAME: string = 'nh_shop';
    const CLOUD_NAME: string = 'dhfryzrce';
    const FOLDER_NAME: string = 'react_image';

    const api: string = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();

    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);


    formData.append("file", files[0]);

    console.log(formData);

    const { data } = await axios.post(api, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log(data);

    return data.secure_url

}

export const uploadSomeImage = async (files: any[]) => {
    const PRESET_NAME: string = 'nh_shop';
    const CLOUD_NAME: string = 'dhfryzrce';
    const FOLDER_NAME: string = 'react_image';

    const api: string = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();

    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);


    const listimages = [];
    for (const image of files) {
        try {
            formData.append("file", image);
            const { data } = await axios.post(api, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            listimages.push(data.secure_url);
        } catch (error) {
            console.log(error);
        }
    }


    return listimages;
}
