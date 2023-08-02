export const getCookie = (name) => {
    let matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
            name.replace(/([$?*|{}()[\]\\/+^])/g, "\\$1") +
            "=([^;]*)"
        )
    );

    return matches ? decodeURIComponent(matches[1]) : undefined;
};


export const setCookie = (cookieName, cookieValue) => {
    var today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000 * 24 * 14);
    document.cookie = cookieName + "=" + encodeURI(cookieValue) + ";expires=" + expire.toGMTString();
}