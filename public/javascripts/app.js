angular
  .module('collabowrite', ['ui.router', 'ngAnimate'])
  .config(config)
  .controller('MainController', MainController)
  .controller('StoryController', StoryController)
  .factory('storyService', storyService)
