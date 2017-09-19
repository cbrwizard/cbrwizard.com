/**
 * Routes for Iron Router
 */
Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  yieldRegions: {
    effectStatic: { to: 'effect' },
  },
  notFoundTemplate: 'notFound',
  onAfterAction: function() {
    let currentRouteName = Router.current().route.getName()
    SEO.set({
      title: TAPi18n.__(`${currentRouteName}.title`),
      meta: {
        description: TAPi18n.__(
          `${currentRouteName}.meta.description`,
        ),
      },
    })
    cbrw.Seo.AnalyticsToggler.init()
  },
})

Router.route('/', {
  name: 'pages.index',
  template: 'pagesIndex',
})

Router.route('/links', {
  name: 'links.index',
  template: 'linksIndex',
})

Router.route('/experiments', {
  name: 'experiments.index',
  template: 'experimentsIndex',
  data: function() {
    return {
      experiments: [
        {
          descriptionEn:
            "A global multiplayer game where you upload a picture and capture territories for it! Imagine a fight between your selfie, a meme, a McDonalds and Burger King logos? In this game, you'll fight for dominance in a huge shared field of squares. The more territories you capture, the more people will be able to see your picture! The game has limits of 10 turns per day. This means that everyone has got the same chances: busy people, gamers… This is the first indie game I've made, using Phaser and Node.js.",
          descriptionRu:
            'Глобальная мультиплеер игра, где нужно захватывать территории для вашего изображения. Чем больше территорий вы захватите, тем больше игроков увидят вашу картинку. Представьте себе битву между селфи и мемом, между лого Макдональдса и Бургер Кинга? Это - первая полноценная инди-игра, которую я сделал, используя Phaser и Node.js.',
          name: 'picswars',
          releaseDate: new Date('2017-09-19').valueOf(),
          title: 'PicsWars.io',
          url: 'http://picswars.io/?ref=cbrwizard.com',
        },
        {
          descriptionEn:
            "A game about Elon trying to colonize Mars! It's made with Unity and can be played in a browser. It was made in 1 month in free time as a part of Github Game-off 2016 competition. Speaking simply, it's a side scroller game.",
          descriptionRu:
            'Игра про то, как Илон колонизирует Марс! Она сделана с помощью Unity, в неё можно играть в браузере. Она была сделана за 1 месяц в свободное время как участник конкурса Github Game-off 2016. По сути, это простенький сайд-скроллер.',
          name: 'elon',
          releaseDate: new Date('2016-12-01').valueOf(),
          title: 'Elon goes to Mars!',
          url: 'https://github.com/cbrwizard/game-off-2016',
        },
        {
          descriptionEn:
            'A website about opinion analysis, which helps people to share their views on everything and get powerful statistics.',
          descriptionRu:
            'Сайт анализа мнений. Позволяет людям узнать, о чем думает общество в виде доступной и мощной статистики.',
          name: 'brainlook',
          releaseDate: new Date('2013-09-01').valueOf(),
          title: 'Brainlook.org',
          url: 'http://brainlook.org',
        },
        {
          descriptionEn:
            'A robot made from LEGO which helps me to stay fit while coding. Every 30 minutes it finds me and tells me to do pushups! A Hipchat bot version is also available.',
          descriptionRu:
            'Робот, сделанный из Лего, помогающий мне не зажиреть во время работы. Каждые полчаса он находит меня и заставляет делать отжимания! Также есть версия в виде Hipchat бота.',
          name: 'perfects_bot',
          releaseDate: new Date('2015-07-28').valueOf(),
          title: 'PerfectS Bot LEGO mindstorms',
          url:
            'https://www.youtube.com/watch?v=me5-JXdOl2I',
        },
        {
          descriptionEn:
            'A satyric website about escaping from Russia as fast as possible.',
          descriptionRu:
            'Сатиристический сайт об эвакуации из Рашки.',
          name: 'rashka',
          releaseDate: new Date('2014-04-01').valueOf(),
          title: 'Vali Iz Rashki',
          url: 'https://github.com/cbrwizard/rashka',
        },
      ],
    }
  },
})
