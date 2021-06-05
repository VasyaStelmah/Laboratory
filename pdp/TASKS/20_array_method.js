const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 2000, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1970, end: 1989 },
];
const members = [
  { name: "James", speciality: "Finance" },
  { name: "Richard", speciality: "Retail" },
  { name: "Thomas", speciality: "Auto" },
  { name: "Charles", speciality: "Retail" },
  { name: "Matthew", speciality: "Technology" },
  { name: "Donald", speciality: "Finance" },
  { name: "Andrew", speciality: "Auto" },
  { name: "Kevin", speciality: "Technology" },
  { name: "Edward", speciality: "Retail" },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//==================[for i]==================
//Перебрать массив companies, в консоли вывести самую старшую компанию
function oldCompany(array) {
  min = array[0].start;
  max = min;
  for (i = 1; i < array.length; ++i) {
    if (array[i].start > max) {
      max = array[i].start;
    }
    if (array[i].start < min) {
      min = array[i].start;
      return min;
    }
  }
}
console.log(oldCompany(companies));
//Перебрать массив companies, в консоли вывести список компании которые начали работать после 2000 (не включая 2000)
function workAfrerTwoThousandYear(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.start > 2000) {
      console.log(element);
    }
  }
}
workAfrerTwoThousandYear(companies);
//Перебрать массив ages, в консоли вывести новый массив, который будет включать в себя числа в соответствии условию ( >= 21 )
function numberMoreTwentyOne(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > 21) {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(numberMoreTwentyOne(ages)); //[33, 54, 44, 61,45, 25, 64, 32]
//==================[forEach]==================
// вывести в консоли просто список компаний (из массива - companies)
function listCompanies(array) {
  array.forEach(function (elem) {
    console.log(elem);
  });
}
listCompanies(companies);
// вывести в консоли просто список компаний которые начали работать с 1987 (включительно / из массива - companies)
function companiesStartWorkIn(array) {
  array.forEach(function (elem) {
    if (elem.start >= 1987) {
      console.log(elem.start);
    }
  });
}
companiesStartWorkIn(companies);
//==================[filter]==================
// Из массива companies найти все компании у которых category = Technology
console.log(
  companies.filter(function (company) {
    return company.category >= "Technology";
  })
);
// В массива members найти всех персон чье имя начинается на 'K' и со специальностью = Technology
console.log(
  members.filter(function (member) {
    return member.category >= "Technology" || member.name.match(/\bKevin\b/);
  })
);
//==================[map]==================
// вернуть новый массив с информацией о компани + информацией сколько лет компания уже не работает на рынке, на период настоящего времени

function informationCompanies(array) {
  let date = new Date();
  date.getFullYear();

  let newArray = array.map(function (value) {
    return {
      category: value.category,
      yearsNotWork: date.getFullYear() - value.end,
    };
  });
  return newArray;
}
console.log(informationCompanies(companies));
// Объеденить два массива companies и members в один, по общему значению в пропертях speciality и category

function joinCompanies(companiesOne, companiesTwo) {
  return companiesOne.map(function (companiesOneObject) {
    return companiesTwo.map(function (companiesTwoObject) {
      if (companiesOneObject.category === companiesTwoObject.speciality) {
        return {
          nameOne: companiesOneObject.name,
          category: companiesOneObject.category,
          start: companiesOneObject.start,
          end: companiesOneObject.end,
          nameTwo: companiesTwoObject.name,
          speciality: companiesTwoObject.speciality,
        };
      }
    });
  });
}
console.log(joinCompanies(companies, members));
// ==================[sort]==================
// Сортировать массив companies по алфавиту а-я - по свойству name
companies.sort((a, b) => (a.name > b.name ? 1 : -1));
console.log(companies);
// Сортировать массив members по алфавиту обратный порядок я-а - по свойству name
companies.sort((a, b) => (a.name < b.name ? 1 : -1));
console.log(companies);
// Просто отсортировать массив по возрастанию ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
ages.sort((a, b) => (a > b ? 1 : -1));
console.log(ages);
//==================[reduce]==================
// 2. вернуть список сотрудников, которые могли бы работать в комнаниях - Company One, Company Two, Company Three, Company Four (в соответствии с их специальностью)
