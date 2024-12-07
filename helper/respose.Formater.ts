const responseFormater = (status: number, message: string, data?: any) => {
  return {
    status,
    message,
    data: data ?? null,
  };
};

export { responseFormater };
