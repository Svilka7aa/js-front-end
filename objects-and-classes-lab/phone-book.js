function phoneBook(array) {
    const phoneObj = array.reduce((acc, curr) => {
        const [name, phone] = curr.split(" ");
        acc[name] = phone;

        return acc;
    }, {})

    for (let key in phoneObj) {
        console.log(`${key} -> ${phoneObj[key]}`)
    }
}


phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])