//Дан объект {a: 'aaa', b: 'bbb'}. Преобразуйте его в JSON

var obj1 = {a: 'aaa', b: 'bbb'};

console.log(JSON.stringify(obj1));

//Дана JSON строка '["Коля", "Вася", "Петя"]'. 
//Преобразуйте ее в массив JavaScript и выведите на экран элемент "Петя"

var name = '["Коля", "Вася", "Петя"]';
name=JSON.parse(name);
console.log(name[2]);