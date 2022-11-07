import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/lowHeader.scss";

function LowHeader(props) {
  const [active, setActive] = useState(false);
  let className;
  const openMegaMenu = () => {
    setActive(!active);
  };
  if (active) {
    className = "mega_menu_modal_active";
  } else {
    className = "";
  }
  return (
    <div className="low_header">
      <nav>
        <Link to="/">
          <div onClick={openMegaMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <span>Все категории</span>
          </div>
        </Link>
        <Link to="/news">Новости</Link>
        <Link to="/newProducts">Новинки</Link>
        <Link to="/discountProducts">Скидки</Link>
        <Link to="/books">Книги</Link>
        <Link to="/furnutures">Мебель</Link>
        <Link to="/gadgets">Телефоны и гаджеты</Link>
        <Link to="/airconditioners">Кондиционеры</Link>
      </nav>
      <div className={`mega_menu_modal`} id={className}>
        <div className="mega_menu_left">
          <ul class="mega__menu_list">
            <li>
              <Link to="/books">
                <img
                  src="https://assets.asaxiy.uz/category//5e0158017e038.png"
                  alt="Книги"
                />
                Книги
              </Link>
            </li>
            <li>
              <Link to="/gadgets">
                <img
                  src="https://assets.asaxiy.uz/category//5e0153249b10a.png"
                  alt="Телефоны и гаджеты"
                />
                Телефоны и гаджеты
              </Link>
            </li>
            <li>
              <Link to="/airconditioners">
                <img
                  src="https://assets.asaxiy.uz/category/air-conditioner.png"
                  alt="Кондиционеры"
                />
                Кондиционеры
              </Link>
            </li>
            <li>
              <Link to="/gadgets">
                <img
                  src="https://assets.asaxiy.uz/category//5e01560bef0bb.png"
                  alt="Компьютеры и оргтехника"
                />
                Компьютеры и оргтехника
              </Link>
            </li>
            <li>
              <Link to="/gadgets">
                <img
                  src="https://assets.asaxiy.uz/category//5fd9fbdaec848.png"
                  alt="Для геймеров"
                />
                Для геймеров
              </Link>
            </li>
            <li>
              <Link to="/gadgets">
                <img
                  src="https://assets.asaxiy.uz/category//5e0154abcfc0e.png"
                  alt="Бытовая техника"
                />
                Бытовая техника
              </Link>
            </li>
            <li>
              <Link to="/gadgets">
                <img
                  src="https://assets.asaxiy.uz/category//5e015729184f2.png"
                  alt="Телевизоры, видео и аудио"
                />
                Телевизоры, видео и аудио
              </Link>
            </li>
            <li>
              <Link to="/Посуда">
                <img
                  src="https://assets.asaxiy.uz/category//kitchen2.png"
                  alt="Посуда"
                />
                Посуда
              </Link>
            </li>
            <li>
              <Link to="/furnutures">
                <img
                  src="https://assets.asaxiy.uz/category/wardrobe.png"
                  alt="Мебель"
                />
                Мебель
              </Link>
            </li>
            <li>
              <Link to="/gadgets">
                <img
                  src="https://assets.asaxiy.uz/category//62be096a99c6d.jpeg"
                  alt="Спорт и отдых"
                />
                Спорт и отдых
              </Link>
            </li>
            <li>
              <Link to="/furnutures">
                <img
                  src="https://assets.asaxiy.uz/category//5e0157aa83115.jpg"
                  alt="Для дома и офиса"
                />
                Для дома и офиса
              </Link>
            </li>
            <li>
              <Link to="/gadgets">
                <img
                  src="https://assets.asaxiy.uz/category//5e01568229ad0.png"
                  alt="Авто"
                />
                Авто
              </Link>
            </li>
            <li>
              <Link to="/gadgets">
                <img
                  src="https://assets.asaxiy.uz/category//5fb29e5f8b8a8.png"
                  alt="Игрушки, подарки и аксессуары"
                />
                Игрушки, подарки и аксессуары
              </Link>
            </li>
            <li>
              <Link href="/newProducts">
                <img
                  src="https://assets.asaxiy.uz/category//609532076b3e6.png"
                  alt="Одежда, обувь и аксессуары"
                />
                Одежда, обувь и аксессуары
              </Link>
            </li>
            <li>
              <Link to="/newProducts">
                <img
                  src="https://assets.asaxiy.uz/category//611662dbc91da.png"
                  alt="Детские товары"
                />
                Детские товары
              </Link>
            </li>
            <li>
              <Link to="/discountProducts">
                <img
                  src="https://assets.asaxiy.uz/category//62c55b4f2bbf2.png"
                  alt="Красота и здоровье"
                />
                Красота и здоровье
              </Link>
            </li>
          </ul>
        </div>
        <div className="mega_menu_right">
          <div className="tab_content">
            <div className="mega_menu_right_inner">
              <div className="mega_menu_content">
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Видеонаблюдение</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Камеры видеонаблюдения </p>
                    <p>Регистраторы</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Безопасность</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Системы контроля доступа</p>
                    <p>Домофоны</p>
                    <p>Замки</p>
                    <p>Тревожные кнопки</p>
                    <p>Датчики движения и открытия дверей</p>
                    <p>Сирены</p>
                    <p>Датчики дыма</p>
                    <p>Центры системы безопасности</p>
                    <p>Комплекты систем безопасности</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Офисные кресла</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">
                    Стабилизаторы напряжения
                  </div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
                <div className="mega_menu_item">
                  <div className="mega_menu_item_title">Гаджеты Xiaomi</div>
                  <div className="mega_menu_item_content">
                    <p>Все товары</p>
                    <p>Ручки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowHeader;
