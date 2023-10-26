export const obfuscateToken = (mode, value) => {
  if (value) {
    if (mode) {
      const obfuscatedValue = btoa(value);
      return obfuscatedValue;
    } else {
      try {
        const decodingValue = atob(value);
        return decodingValue;
      } catch (error) {
        console.error("Failed to decode the value:", error);
        return value;
      }
    }
  } else {
    return value;
  }
};
