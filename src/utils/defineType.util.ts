export type WithChildren<T = {}> = T & { children?: React.ReactNode };

export type MakeRequired<T, K extends keyof T> = Omit<T, K> &
  Required<{ [P in K]: T[P] }>;
