export const regEscape = (v: string) =>
  v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
