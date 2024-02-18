export const MockApiHelper = {
  success: function <T>(data: T, delay: number = 300) {
    return new Promise<T>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  },

  failure: function <T>(data: T, delay: number = 300) {
    return new Promise<T>((_, reject) => {
      setTimeout(() => {
        reject(data);
      }, delay);
    });
  },

  random: function <T>(data: T, delay: number = 300) {
    return new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        isSuccess ? resolve(data) : reject(data);
      }, delay);
    });
  },
};
