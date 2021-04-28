function createNewUser(){                               //Обьвление и определение функции создания пользователя
    let newUser = {                                     //Обьвление и определение нового пользователя  
        getLogen: function() {                          //Обьвление и определение функции получение логина
            return console.log(this.Name[0].toUpperCase() 
            + this.SName.toLowerCase()) ;               //Вывод логина пользователя
        },
        getAge: function () {                           //Обьвление и определение функции определения возраста пользователя
            let now = new Date();                       //Обьвление и определение даты
            let currentYear = now.getFullYear();        //Обьвление и определение текущего года
        
            let inputDate = +this.birthday.substring(0, 2);                 //Обьвление и определение дня // обрезка строки введенной даты
            let inputMonth = +this.birthday.substring(3, 5);                //Обьвление и определение месяца // обрезка строки введенной даты
            let inputYear = +this.birthday.substring(6, 10);                //Обьвление и определение года // обрезка строки введенной даты
        
            let birthDate = new Date(inputYear, inputMonth-1, inputDate);   //Обьвление и определение даты рождения
            let birthYear = birthDate.getFullYear();                        //Обьвление и определение года рождения
            let age = currentYear - birthYear;                              //Обьвление и определение возраста
                if (now < new Date(birthDate.setFullYear(currentYear))) {   //Проверка есть ли текущая дата меньше даты рождения
                    age = age - 1;                                          //Вывод возраста "0" если рождение в текущем году
                }
                return console.log(age);                                    //Возврат возраста если год рождения меньше текущего
                },
            getPassword: function () {                  //Обьвление и определение функции определения пароля пользователя
                return console.log(this.Name[0].toUpperCase() + this.SName.toLowerCase() + this.birthday.substring(6,10));
            }                                           //Определение и возврат пароля пользователя
             
        };
        newUser.prototype = {                           //Определение прототипа нового пользователя
            get username() {                            //GetUsername для имени
                    return this.Name;},                 //Возврат имени

            set username(UserNames) {                   //SetUsername для имени
                this.Name = Name;},                     //Определение имени

            get usersecondname() {                      //GetUsername для имени
                    return this.SName;},                //Возврат имени
            
            set usersecondname(UserSecondNames) {       //SetUsername для имени
                this.SName = SName;}                    //Определение имени
            
            };
   
    newUser.Name = prompt("Введите имя",'Number');                      //Обьвление и определение имени
    while (newUser.Name === ''){                                        //Проверка на пустую строку
        newUser.Name = prompt('Введите имя ЗАНОВО! : ','Number');       //Определение имени
    }
    newUser.SName = prompt("Введите фамилию",'Serega');                 //Обьвление и определение фамилии
    while (newUser.SName === ''){                                       //Проверка на пустую строку
        newUser.SName = prompt('Введите фамилию ЗАНОВО! : ','Serega');  //Определение фамилии
    }
    newUser.birthday = prompt("Write your birthday dd.mm.yyyy: ",'27.02.2000'); //Обьвление и определение даты рождения

    newUser.getLogen();                                                 //Вызов функции определения логина пользователя
    newUser.getAge();                                                   //Вызов функции определения возраста пользователя
    newUser.getPassword();                                              //Вызов функции определения пароля пользователя
    newUser.Name = "Stepan";                                            //Переопределение имени пользователя
    newUser.SName = "Gigga";                                            //Переопределение фамилии пользователя
    newUser.getLogen();                                                 //Вызов функции определения логина пользователя
    newUser.getAge();                                                   //Вызов функции определения возраста пользователя
    newUser.getPassword();                                              //Вызов функции определения пароля пользователя
    
    console.log(newUser.Name + ' : ' + newUser.SName);                  //Вывод результа ввода

    return newUser;                                                     //Возврат нового пользователя                                 
}
createNewUser();                                                        //Вызов функции создания нового пользователя
