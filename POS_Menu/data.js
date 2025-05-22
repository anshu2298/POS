import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { RiDrinksLine } from "react-icons/ri";
import { CiFries } from "react-icons/ci";
import { LuSalad } from "react-icons/lu";

export const menuData = {
  pizza: [
    {
      id: "pizza-1",
      name: "Capricciosa",
      price: 200,
      image:
        "https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "pizza",
    },
    {
      id: "pizza-2",
      name: "Sicilian",
      price: 150,
      image:
        "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "pizza",
    },
    {
      id: "pizza-3",
      name: "Marinara",
      price: 90,
      image:
        "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "pizza",
    },
    {
      id: "pizza-4",
      name: "Pepperoni",
      price: 300,
      image:
        "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "pizza",
    },
    {
      id: "pizza-5",
      name: "Margherita",
      price: 200,
      image:
        "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "pizza",
    },
    {
      id: "pizza-6",
      name: "Vegetarian",
      price: 200,
      image:
        "https://images.pexels.com/photos/5639767/pexels-photo-5639767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "pizza",
    },
  ],
  burger: [
    {
      id: "burger-1",
      name: "Classic Burger",
      price: 150,
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "burger",
    },
    {
      id: "burger-2",
      name: "Cheese Burger",
      price: 180,
      image:
        "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "burger",
    },
    {
      id: "burger-3",
      name: "Double Patty",
      price: 220,
      image:
        "https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "burger",
    },
    {
      id: "burger-4",
      name: "Chicken Burger",
      price: 190,
      image:
        "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "burger",
    },
  ],
  drink: [
    {
      id: "drink-1",
      name: "Cola",
      price: 50,
      image:
        "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "drink",
    },
    {
      id: "drink-2",
      name: "Orange Juice",
      price: 70,
      image:
        "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "drink",
    },
    {
      id: "drink-3",
      name: "Iced Tea",
      price: 60,
      image:
        "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "drink",
    },
    {
      id: "drink-4",
      name: "Mineral Water",
      price: 40,
      image:
        "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "drink",
    },
  ],
  fries: [
    {
      id: "fries-1",
      name: "Classic Fries",
      price: 80,
      image:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "fries",
    },
    {
      id: "fries-2",
      name: "Cheese Fries",
      price: 100,
      image:
        "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "fries",
    },
    {
      id: "fries-3",
      name: "Loaded Fries",
      price: 120,
      image:
        "https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "fries",
    },
  ],
  veggies: [
    {
      id: "veggies-1",
      name: "Garden Salad",
      price: 110,
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "veggies",
    },
    {
      id: "veggies-2",
      name: "Greek Salad",
      price: 130,
      image:
        "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "veggies",
    },
    {
      id: "veggies-3",
      name: "Grilled Vegetables",
      price: 150,
      image:
        "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "veggies",
    },
  ],
};

export const defaultCategories = [
  {
    id: "burger",
    label: "Burger",
    icon: GiHamburger,
  },
  {
    id: "pizza",
    label: "Pizza",
    icon: GiFullPizza,
  },
  {
    id: "drink",
    label: "Drink",
    icon: RiDrinksLine,
  },
  {
    id: "fries",
    label: "French fries",
    icon: CiFries,
  },
  {
    id: "veggies",
    label: "Veggies",
    icon: LuSalad,
  },
];

export function getAllMenuItems() {
  return Object.values(menuData).flat();
}

export function getMenuItemsByCategory(category) {
  return menuData[category] || [];
}

export function searchMenuItems(query) {
  const allItems = getAllMenuItems();
  if (!query) return allItems;

  const lowerCaseQuery = query.toLowerCase();
  return allItems.filter((item) =>
    item.name.toLowerCase().includes(lowerCaseQuery)
  );
}

export function getMenuItemById(id) {
  return getAllMenuItems().find((item) => item.id === id);
}
