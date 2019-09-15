import { postFile } from '../helpers/serviceHelper';

const UploadVideoService = async (blob, username) => {
    const { data } = await postFile('single', blob, username);
    return new Blob([data]);
};

export default UploadVideoService;
