extend Tools::Db::SeedsProcessor

I18n.locale = :en

populate_model_by_hash({ articles: [
                         { title: "Programming, people and worlds", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tag_list: "kek, lol, mega, rails", feeling: 'funky' },
                         { title: "Random thoughts", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tag_list: "kek, mega long tag, mega, rails", feeling: 'sad' },
                         { title: "About programming", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tag_list: "kek, random thoughts, mega, rails", feeling: 'happy' }
                       ] })

article1 = Article.where(title: "Programming, people and worlds").first
article2 = Article.where(title: "Random thoughts").first
article3 = Article.where(title: "About programming").first

I18n.locale = :ru

article1.update(
         title: "Программирование, люди и миры",
         text: "Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности способствует подготовки и реализации существенных финансовых и административных условий. Равным образом рамки и место обучения кадров в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.",
         feeling: 'безумно'
)

article2.update(
         title: "Случайные мысли",
         text: "Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Повседневная практика показывает, что новая модель организационной деятельности требуют от нас анализа направлений прогрессивного развития. Разнообразный и богатый опыт рамки и место обучения кадров требуют от нас анализа систем массового участия. Равным образом реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.",
         feeling: 'счастливо'
)

article3.update(
         title: "О программировании",
         text: "Задача организации, в особенности же реализация намеченных плановых заданий требуют от нас анализа модели развития. Равным образом укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения систем массового участия. Не следует, однако забывать, что консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Таким образом рамки и место обучения кадров требуют определения и уточнения систем массового участия. С другой стороны дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание новых предложений.",
         feeling: 'печально'
)
