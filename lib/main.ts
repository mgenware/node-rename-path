import * as nodepath from 'path';
import * as localPath from './path';

export default function rename(
  filePath: string,
  callback?: (pathObj: localPath.ParsedPath) => localPath.FormatInputPathObject,
): string {
  if (!callback) {
    return filePath;
  }

  const parsedPath = nodepath.parse(filePath);
  parsedPath.base = '';
  const inputPathObj: localPath.FormatInputPathObject = {
    ...parsedPath,
    ...callback(parsedPath),
  };
  return nodepath.format(inputPathObj);
}
