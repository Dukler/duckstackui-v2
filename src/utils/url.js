export const getPageNameByLevel = (url, level) => url.split("/")[level]?.split("?")[0];

export const getCurrentUser = () => "8a"
export const getCurrentRoles = () => ['user','dev']

const capFirstLetter = (string) =>{
    return string.substring(0, 1).toUpperCase() + string.substring(1);
}

export const getSliceName = (url) =>{
    const domain = getPageNameByLevel(url, 1);
    let string = domain;
    let startIndex = 2;
    if (domain === "pages"){
        string = getPageNameByLevel(url, 2);
        startIndex = 3;
    }
    // string = getPageNameByLevel(url, 1) === "pages" ? "" : getPageNameByLevel(url, 1);
    for (let i = startIndex; i < url.split("/").length; i++) {
        string += capFirstLetter(getPageNameByLevel(url, i))
    }
    return string
}