describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал вайти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
     })

     describe('Проверка авторизации', function () {

        it('Верный логин и неверный пароль', function () {
             cy.visit('https://login.qa.studio/'); //Зашли на сайт
             cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
             cy.get('#pass').type('iLoveqastudio7'); //Ввели неверный пароль
             cy.get('#loginButton').click(); //Нажал вайти
             cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авт. вижу текст
             cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
             cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
         })
    })

    describe('Проверка авторизации', function () {

        it('Проверка, что в логине есть @', function () {
             cy.visit('https://login.qa.studio/'); //Зашли на сайт
             cy.get('#mail').type('germandolnikov.ru'); //Ввели верный логин без @
             cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
             cy.get('#loginButton').click(); //Нажал вайти
             cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после авт. вижу текст
             cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
             cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
         })
    })

    describe('Проверка востановления пароля ', function () {

        it('Проверка, восстановление пароля', function () {
             cy.visit('https://login.qa.studio/'); //Зашли на сайт
             
             cy.get('#forgotEmailButton').click(); //Нажимаю восстановить пароль
             cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввёл почту для востановления
             cy.get('#restoreEmailButton').click(); // Нажал отправить код 
             cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю, совп, текст
             cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
             cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
         })
    })

    describe('Проверка авторизации', function () {

        it('Неверный логин и верный пароль', function () {
             cy.visit('https://login.qa.studio/'); //Зашли на сайт
             cy.get('#mail').type('german@dolniko.ru'); //Ввели неверный логин
             cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
             cy.get('#loginButton').click(); //Нажал вайти
             cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авт. вижу текст
             cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
             cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
         })
    })

    describe('Проверка авторизации', function () {

        it('Вводим логин строчнми буквами и верный пароль', function () {
             cy.visit('https://login.qa.studio/'); //Зашли на сайт
             cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин строчнми буквами
             cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
             cy.get('#loginButton').click(); //Нажал вайти
             cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авт. вижу текст
             cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
             cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
         })
    })
})

    
 
 
 
 
