let compType;

switch (process.platform) {
  case 'darwin':
  case 'linux':
    compType = 'touch ';
    break;
  case 'win32':
    compType = 'echo > ';
    break;
  default:
    throw new Error('Unsupported platform: ' + process.platform);
}

// stylesheet extensions
const styleExts = '--less'

export { compType, styleExts }