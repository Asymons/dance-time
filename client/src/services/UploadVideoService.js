import { postFile } from '../helpers/serviceHelper';

const UploadVideoService = async blob => {
    const { data } = await postFile('single', blob);
    debugger;
    return new Blob([data]);
};

export default UploadVideoService;
