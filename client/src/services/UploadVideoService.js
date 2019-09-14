import { postFile } from '../helpers/serviceHelper';

const UploadVideoService = async blob => {
    const { data } = await postFile('upload', blob);
    return new Blob([data]);
};

export default UploadVideoService;
