import * as nodepath from 'path';

export default function rename(
  filePath: string,
  callback?: (pathObj: nodepath.ParsedPath) => nodepath.FormatInputPathObject,
): string {
  if (!callback) {
    return filePath;
  }

  const parsedPath = nodepath.parse(filePath);
  parsedPath.base = '';
  const inputPathObj: nodepath.FormatInputPathObject = {
    ...parsedPath,
    ...callback(parsedPath),
  };
  return nodepath.format(inputPathObj);
}
