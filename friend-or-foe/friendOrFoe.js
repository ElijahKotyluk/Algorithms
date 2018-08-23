const friends = ["Ryan", "Kieran", "Jason", "Yous"]

function friend(friends) {
    // Filter all strings out that have a length of 4.
    const result = friends.filter(el => el.length === 4);
    // return result;
    console.log(result);
}

friend(friends);