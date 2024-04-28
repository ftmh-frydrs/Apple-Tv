export const login = async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { otpCode: "123456" } });
      }, 500);
    });
  };
  
