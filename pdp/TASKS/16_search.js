//============== Array [ A simple search (case-sensitive)]
{
    const persons = [
        { id: 1, name: "Karl", age: 24, group: "editor" },
        { id: 2, name: "Poul", age: 32, group: "admin" },
        { id: 3, name: "John", age: 42, group: "editor" },
        { id: 4, name: "Mark", age: 25, group: "admin" },
    ];
    // Написать функцию -
    // Которая возвращает массив из сотрудников из группы 'admin' у которых в имени встречаются сочетания букв - 'ar'
    const newArray = [];
    search = (groupName, array, searchWord) => {
        array.forEach(function (item) {
            if (item.group === groupName) {
                if (item.name.includes(searchWord)) {
                    newArray.push(item);
                }
            }
        });
        return newArray;
    };
    console.log(search("admin", persons, "ar"));
}