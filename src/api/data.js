export const neruhomistStatusMap = {
  sale: 'Продаж',
  rent: 'Оренда',
};

export const neruhomistTypeMap = {
  bagatokimnatni: 'Багатокімнатні',
  budynok: 'Будинок',
  kotedzh: 'Котедж',
};

export const neruhomistLocationMap = {
  'lvivska-obl': 'Львівська обл.',
  rudno: 'Рудно',
  vynnyky: 'Винники',
  bryuhovychi: 'Брюховичі',
  lviv: 'Львів',
};

export const neruhomostiData = [
  {
    id: 1,
    nameId:
      'prodazh-eksklyuzyvnoyi-4k-z-dvoma-parkomisczyamy-lviv-vul-galileya-park-pogulyanka',
    name: 'Продаж ексклюзивної 4к з двома паркомісцями Львів, вул. Галілея (парк Погулянка)',
    address:
      'вулиця Галілея, 5, Львів, Львівська область, Україна, Личаківський р-н',
    location: 'lviv',
    status: 'sale',
    price: '650 000$',
    type: 'bagatokimnatni',
    photos: [
      '/neruhomist-photos/1/1.png',
      '/neruhomist-photos/1/2.png',
      '/neruhomist-photos/1/1.png',
      '/neruhomist-photos/1/2.png',
      '/neruhomist-photos/1/1.png',
    ],
    isRecomended: true,
    details: {
      area: 161,
      floor: 3,
      floors: 5,
      rooms: 4,
      walls: 'Цегла',
    },
    description: `Продаж ексклюзивної 4к з двома паркомісцями Львів, вул. Галілея (парк Погулянка). Поверх 3/5ц., площа 161 кв.м. Кількість спалень: 3. Гардеробні кімнати: Є в кожній спальні. Балкони: 2. Матеріали: Все виконано з використанням дорогих матеріалів. Підлога: Паркет, під яким розташована фанера 16, що гарантує відсутність скрипів та постороніх звуків. Міжкімнатні двері: З натурального дерева. Будівля: Зведена з якісної цегли з товстими стінами, забезпечує прохолоду влітку та тепло взимку

Ця квартира – це не лише житло, але й твір мистецтва. Власники вклали свою душу у її ремонт та декор, створюючи унікальний простір, який говорить про їхню безмежну любов до дому.

Камін у вітальні, кухня з натурального дерева та використання найкращих матеріалів у всьому ремонті.

Кожна спальня оснащена гардеробними кімнатами для максимальної зручності та організації простору.

Два балкони надають можливість насолоджуватися свіжим повітрям та краєвидами на зелені зони міста.

Не лише квартира, а й будинок сам по собі є якісним вкладенням, зведеним із застосуванням надійних матеріалів та товстими стінами, що забезпечують комфортне перебування в будинку як влітку, так і взимку.

Також, наявність двох парковочних місць для автомобілів додає комфорту для власників транспортних засобів.`,
    features: [
      'Гарний краєвид',
      'Елітний район',
      'Паркова зона',
      'Підземний паркінг',
    ],
  },
  {
    id: 2,
    nameId: 'orenda-3-kim-budynku-smt-bryuhovychi',
    name: 'Оренда 3-кім. будинку смт. Брюховичі',
    address: 'Брюховичі, Львівська область, Україна',
    location: 'bryuhovychi',
    status: 'rent',
    price: '1 000$',
    type: 'budynok',
    photos: [
      '/neruhomist-photos/2/1.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/1.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/1.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/1.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/1.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/1.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/1.png',
      '/neruhomist-photos/2/2.png',
      '/neruhomist-photos/2/1.png',
    ],
    isRecomended: false,
    details: {
      area: 23,
      floors: 2,
      rooms: 3,
      walls: 'Блоки',
      buildingType: 'Новобудова',
    },
    description: `Оренда 3-кім. будинку смт. Брюховичі, площа 100 кв.м., будинок огороджений 6 соток, в будинку дві окремі кімнати, великий зал, який переходить в кухню студіо.`,
    features: [],
  },
  {
    id: 3,
    nameId: 'terminovyj-prodazh-kotedzhu-smt-zymna-voda-vul-yaroslava-mudrogo',
    name: 'Терміновий продаж котеджу смт. Зимна Вода, вул. Ярослава Мудрого',
    address: 'Зимна Вода, Львівська область, Україна',
    location: 'rudno',
    status: 'sale',
    price: '84 000$',
    type: 'kotedzh',
    photos: [
      '/neruhomist-photos/3/1.png',
      '/neruhomist-photos/3/2.png',
      '/neruhomist-photos/3/1.png',
    ],
    isRecomended: false,
    details: {
      area: 328,
      floors: 3,
      rooms: 5,
      walls: 'Бетон',
    },
    description: `Терміновий продаж котеджу смт. Зимна Вода, вул. Ярослава Мудрого. Загальна площа 100 кв.м. 2- кімнати + кухня студіо , гардеробна, Тераса, 2 санвузли. Зроблена електрика, проведений газ, опалення, в наявності дорогий газовий котел. Зроблено водопостачання. 2 сот. землі. В будинку: чистова стяжка, штукатурка, зроблене опалення, розведена електрика, дизайнерській проект. Центральна вода, каналізаці, світло, газ. В ціну входить огорожа та брама. Є дизайнерський проект. Котедж знаходиться у центрі Зимної Води .

До центру Львова 20 хвилин на автомобілі, а це означає, що нові мешканці зможуть користуватися розвиненою інфраструктурою великого обласного центру: магазинами, учбовими, медичними і культурними установами.

В кілометрі по Кільцевій дорозі гіпермаркет «Ашан» та ТЦ «Арена Львів», а до гіпермаркетів «Метро», «Епіцентр» та «Три слони» на автомобілі 5 хвилин.

Не буде проблем і з пошуками дитячого садочку або школи. Дошкільнята зможуть відвідувати Зимноводівський дитячий садочок «Казковий світ», а діти шкільного віку — Зимноводівську школу №1. Якщо після закінчення школи не хочеться далеко їхати – поруч Львів з багатьма ВНЗ різноманітного профілю.

В 5 хвилинах є прекрасне місце для відпочинку — парк «Лапаївське лісництво», але можна провести час і в аквапарку «Пляж», до якого на автомобілі 15 хвилин.`,
    features: [],
  },
];
