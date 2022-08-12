export const getPrefix = (string) => string?.substr(0, string?.indexOf('|'))

export const getBase = (string) => string?.includes('|') ? string?.substr(string.indexOf('|') + 1) : string;

export const getMods = (string) => [getPrefix(string),getBase(string)]