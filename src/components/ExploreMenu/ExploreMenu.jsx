import "./exploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explor our menu</h1>
      <p className="explore-menu-text">
        Our menu begins with delightful starters like Garlic Parmesan Fries,
        crispy and seasoned to perfection, and Stuffed Mushrooms, filled with a
        creamy blend of herbs and breadcrumbs. For the main course, savor the
        Grilled Salmon, accompanied by roasted vegetables and a tangy lemon
        butter sauce, or enjoy the rich Chicken Alfredo Pasta, featuring tender
        chicken breast in a creamy Alfredo sauce with fettuccine.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
