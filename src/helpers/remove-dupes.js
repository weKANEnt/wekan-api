/**
 * Function to remove the duplicates form an array
 * @param {*} arr 
 * @returns {Array}
 */
module.exports.removeDupes = function (arr){
    let uniques = [];
    arr.forEach((val) => {
        if (!uniques.includes(val)){
            uniques.push(val);
        }
    });
    return uniques;
}