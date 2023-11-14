const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Сидоров",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Фёдоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Голубев",
            "id_13": "Степанов",
            "id_14": "Лежнев",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Иван",
            "id_2": "Руслан",
            "id_3": "Степан",
            "id_4": "Артём",
            "id_5": "Михаил",
            "id_6": "Олег",
            "id_7": "Владимир",
            "id_8": "Владислав",
            "id_9": "Роман",
            "id_10": "Виктор" 
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Полина",  
            "id_3": "Александра",
            "id_4": "Наталья",
            "id_5": "Елена",
            "id_6": "Анастасия", 
            "id_7": "Галина",
            "id_8": "Яна",
            "id_9": "Юлия",
            "id_10": "София"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "IT-Специалист",
            "id_2": "Фармацевт",
            "id_3": "Менеджер по продажам",
            "id_4": "Дизайнер",
            "id_5": "Маркетолог",
            "id_6": "Педагог",
            "id_7": "Психолог",
            "id_8": "Финаносвый аналитик",
            "id_9": "Инженер",
            "id_10": "Торговый представитель"  
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Аналитик",
            "id_2": "Веб-дизайнер",
            "id_3": "Юрист",
            "id_4": "Биоинженер",
            "id_5": "Бьюти-специалист",
            "id_6": "3D-аниматор",
            "id_7": "Саунд-дизайнер",
            "id_8": "Копирайтер",
            "id_9": "Робототехник",
            "id_10": "Биотехнолог"  
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    ///////// randomIntNumber генерирует случайные числа.
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),


    //////// randomValue генерирует случайные  показатели в зависимости от функции randomIntNumber.
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },


    //////// randomGender реализует генерацию пола.
    randomGender: function () {
        gender = this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },


    ///////// randomFirstName реализует генерацию имени в зависимости от пола.	
    randomFirstName: function () {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     ///// randomSurname реализует генерацию фамилии в зависимости от пола.
     randomSurname: function () {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    /////// randomPatronymic реализует генерацию отчества в зависимости от пола.
    randomPatronymic: function () {
        let patronymic = this.randomValue(this.firstNameMaleJson);
        return this.nameToPatronymic(patronymic);
    },

    nameToPatronymic: function (name) {
        if (this.person.gender === this.GENDER_MALE) {
            switch (name) {
                case "Иван":
                case "Руслан":
                case "Степан":
                case "Артём":
                case "Михаил":
                case "Олег":
                case "Владимир":
                case "Владислав":
                case "Роман":
                case "Виктор":   
                    return name + "ович";
            }
        } else {
            switch (name) {
                case "Иван":
                case "Руслан":
                case "Степан":
                case "Артём":
                case "Михаил":
                case "Олег":
                case "Владимир":
                case "Владислав":
                case "Роман":
                case "Виктор":  
                    return name + 'овна';
            }
        }
    },

    //////// randomProfession реализует генерацию профессий в зависимости от пола.
	 randomProfession: function () {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else
            return this.randomValue(this.professionFemaleJson);
    },

    ////// randomBirthday реализует генерацию дней рождений.
    randomBirthday: function () {
        year = this.randomIntNumber(2000, 1970);
        month = this.randomValue(this.monthJson);
        if (this.month === 'id_4' || 'id_6' || 'id_9' || 'id_11') {
            day = this.randomIntNumber(30, 1);
        } else if (this.month === 'id_2' && year % 4 === 0) {
            day = this.randomIntNumber(29, 1);
        } else if (this.month === 'id_2' && year % 4 !== 0) {
            day = this.randomIntNumber(28, 1);
        } else day = this.randomIntNumber(31, 1);
        date = `${day} ${month} ${year} г.`;
        return date;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthday = this.randomBirthday();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};