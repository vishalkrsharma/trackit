import { promises as fs } from 'fs';

const loadFile = async (fileName: string, encoding: BufferEncoding) => {
  const response = await fs.readFile(fileName, encoding);

  return JSON.parse(response);
};

export default loadFile;
