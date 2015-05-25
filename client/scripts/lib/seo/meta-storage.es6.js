/**
 * Stores meta tags information and handles them
 */
class MetaStorage {
  /**
   * Sets current SEO tags for a certain route name and language
   *
   * @param pathName {String} route name
   */
  static setSeoForPathName(pathName) {
    SEO.set(
      this.seoTags[pathName][this._currentLanguage()]
    );
  }

  /**
   * Returns current language
   *
   * @returns {String}
   * @private
   */
  static _currentLanguage() {
    return TAPi18n.getLanguage();
  }

  /**
   * Stores meta tags data separated by route name and language
   *
   * @returns {Object}
   */
  static get seoTags() {
    return {
      "pages.index": {
        "en": {
          title: 'Index - cbrwizard.com - Fyodor Ivanishchev',
          meta: {
            'description': 'Main page of a magical website.'
          }
        },
        "ru-RU": {
          title: 'Главная - cbrwizard.com - Фёдор Иванищев',
          meta: {
            'description': 'Главная страница магического сайта.'
          }
        }
      },
      "pages.about": {
        "en": {
          title: 'What is this? - cbrwizard.com - Fyodor Ivanishchev',
          meta: {
            'description': 'Reveal a cbrwizard identity!'
          }
        },
        "ru-RU": {
          title: 'Что это? - cbrwizard.com - Фёдор Иванищев',
          meta: {
            'description': 'Кто такой cbrwizard?'
          }
        }
      },
      "links.index": {
        "en": {
          title: 'Links - cbrwizard.com - Fyodor Ivanishchev',
          meta: {
            'description': 'Where to find cbrwizard.'
          }
        },
        "ru-RU": {
          title: 'Ссылочки - cbrwizard.com - Фёдор Иванищев',
          meta: {
            'description': 'Где еще можно найти cbrwizard-а.'
          }
        }
      },
      "experiments.index": {
        "en": {
          title: 'Experiments - cbrwizard.com - Fyodor Ivanishchev',
          meta: {
            'description': 'Weird magical experiments.'
          }
        },
        "ru-RU": {
          title: 'Эксперименты - cbrwizard.com - Фёдор Иванищев',
          meta: {
            'description': 'Странные эксперименты.'
          }
        }
      }
    }
  }
}

cbrw.Seo.MetaStorage = MetaStorage;