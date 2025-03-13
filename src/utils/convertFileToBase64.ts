/**
 * Converts a File object to a Base64 encoded string.
 *
 * @param {File} file - The file to be converted to Base64.
 * @returns {Promise<string>} A promise that resolves to the Base64 encoded string of the file.
 *
 * The function uses the FileReader API to read the file as a data URL,
 * then extracts the Base64 portion from the data URL and resolves it.
 * If an error occurs during the reading process, the promise is rejected.
 */
export const convertFileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = (reader.result as string)?.replace(
        /^data:[A-z]*\/?[A-z]*;base64,/,
        '',
      );
      resolve(base64);
    };
    reader.onerror = error => reject(error);
  });
