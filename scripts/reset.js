const fs = require('fs');

deleteFolderRecursive = (directory, folderName) => {
  if (fs.existsSync(directory)) {
    files = fs.readdirSync(directory);
    files.forEach((file) => {
      const curPath = directory + '/' + file;
      const lastPaths = curPath.split('/').pop();

      folderName = typeof folderName === 'string' ? [folderName] : folderName;

      if (folderName.includes(lastPaths)) {
        fs.rmdirSync(curPath, { recursive: true, force: true });
        console.info('removendo: ' + curPath);
      } else {
        if (
          fs.lstatSync(curPath).isDirectory() &&
          !curPath.endsWith('node_modules')
        ) {
          deleteFolderRecursive(curPath, folderName);
        }
      }
    });
  }
};

deleteFolderRecursive(process.cwd(), ['node_modules', 'dist', '.next', 'out']);
