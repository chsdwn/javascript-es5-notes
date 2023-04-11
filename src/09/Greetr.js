'use strict';
(function (global, $) {
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ['en', 'tr'];

  var greetings = {
    en: 'Hello',
    tr: 'Selam',
  };

  var formatGreetings = {
    en: 'Greetings',
    tr: 'Merhaba',
  };

  var logMessages = {
    en: 'Logged in',
    tr: 'Giriş yapıldı',
  };

  Greetr.prototype = {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName;
    },
    formalGreeting: function () {
      return formatGreetings[this.language] + ', ' + this.fullName();
    },
    greet: function (isFormal) {
      var msg = isFormal ? this.formalGreeting() : this.greeting();

      if (console) console.log(msg);

      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },
    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreeting: function (selector, isFormal) {
      if (!$) throw 'jQuery not loaded.';
      if (!selector) throw 'Missing jQuery selector.';

      var msg = isFormal ? this.formalGreeting() : this.greeting();
      $(selector).html(msg);
      return this;
    },
  };

  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
