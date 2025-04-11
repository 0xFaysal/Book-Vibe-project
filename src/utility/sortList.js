function sortList(list, sortBy) {
    return list.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
            return -1;
        }
        if (a[sortBy] < b[sortBy]) {
            return 1;
        }
        return 0;
    });
}

export default sortList;
