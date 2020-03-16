let s1 = "bar";
let s2 = "foo";
console.log(characterMapping(s1, s2));

function characterMapping(s1, s2) {

    if (!s1 && !s2) return true;

    if (!s1 || !s2) return false;

    if (s1.length !== s2.length) return false;

    let myMap = new Map();

    for (let i = 0; i <= s1.length; i++) {

        let check = myMap.get(s1[i]);

        if (!check) myMap.set(s1[i], s2[i]);
        else if (check !== s2[i]) return false;
    }
    return true;
};