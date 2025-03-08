const maskEmail = (email?: string) => {
  if (!email) return;
  return email.replace(/^(.{2})[^@]+/, '$1***');
};
export default maskEmail;
