function setItem(key, value) {
    const data = getItem(key);
    const exist = data.includes(value);
    if (exist) {
        return 1;
    } else {
        data.push(value);
    }
    localStorage.setItem(key, JSON.stringify(data));
}

function getItem(key) {
    if (!localStorage.getItem(key)) {
        return [];
    }
    return JSON.parse(localStorage.getItem(key));
}

export { setItem, getItem };
