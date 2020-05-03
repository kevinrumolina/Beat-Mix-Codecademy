// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toogleDrum = (drumName, index) => {
    if (drumName[index] === false) {
        drumName[index] = true;
    } else {
        drumName[index] = false;
    }

    return drumName;
};

const clear = drumName => {
    const initialArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    drumName = initialArray;
    
    return drumName;
}

const invert = drumName => {
    drumName = drumName.map(element => {
        if (element === false) {
            return true;
        } else {
            return false;
        }
    });
    
    return drumName;
};