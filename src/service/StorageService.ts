const LOCAL_STORAGE_FORMAT_TYPE_NAME = "local-storage-format-type";

const StorageService = {
  saveFormatType: (formatType: number = 0) => {
    localStorage.setItem(LOCAL_STORAGE_FORMAT_TYPE_NAME, formatType.toString());
  },
  findFormatType: () => {
    const formatType = localStorage.getItem(LOCAL_STORAGE_FORMAT_TYPE_NAME);

    return parseInt(formatType ?? "0", 10);
  },
};

export default StorageService;
