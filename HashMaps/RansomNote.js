function checkMagazine(magazine, note) {
    let magHash = {}
    //iterate over magazine and populate hash
    magazine.forEach(word => {
        magHash[word] = (magHash[word] + 1 || 1)
    })
    //iterate over note and check value against magazine hash
    note.forEach(word => {
        if (!(word in magHash) || magHash[word] === 0){
            return false
        }
        else {
            magHash[word] = magHash[word] - 1
        }
    })
    return true
}