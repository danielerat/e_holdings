class UploadableFiles {
  constructor(file) {
    this.file = file;
    // Setting the filename || Id
    this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
    this.url = URL.createObjectURL(file);
    this.status = null;
  }
}

export default UploadableFiles;
