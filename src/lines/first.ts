let arr = [1, 23, 2, 4, 5, 5]
function YES() {
    arr.reduce((previous, current) => {
        return previous + current;
    })

}

export default YES;