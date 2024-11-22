export const isAudio = (fileName: string): boolean => {
  const audioExtensions = ['mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a', 'wma', 'alac'];
  const fileExtension = fileName?.split('.').pop()?.toLowerCase();

  return fileExtension && !fileName.startsWith('/media')
    ? audioExtensions.includes(fileExtension)
    : false;
};
