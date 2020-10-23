class Dictionary {
    constructor() {
        this.dictionary = {}
    }
    add(key, value) {
        this.dictionary[key] = value
    }
    get(key) {
        return this.dictionary[key]
    }
}

const phonebook = new Dictionary()
phonebook.add('Azim', '01923973932')
phonebook.add('Razib', '01923973931')
phonebook.add('Ournima', '01923973933')
console.log(phonebook.dictionary);


const Azim = phonebook.get('Azim')
console.log(Azim);