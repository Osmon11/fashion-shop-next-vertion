import paris from "../../assets/img/paris.webp";
import singapore from "../../assets/img/singapore.webp";
import prague from "../../assets/img/prague.webp";
import amsterdam from "../../assets/img/amsterdam.webp";
import moscow from "../../assets/img/moscow.webp";

export const initialState = {
  reducer: {
    categories: ["For men", "For women", "For kids"],
    slides: [
      {
        city: "Paris",
        country: "France",
        img: paris,
      },
      {
        city: "Singapore",
        img: singapore,
      },
      {
        city: "Prague",
        country: "Czech Republic",
        img: prague,
      },
      {
        city: "Amsterdam",
        country: "Netherlands",
        img: amsterdam,
      },
      {
        city: "Moscow",
        country: "Russia",
        img: moscow,
      },
    ],
    modal: {
      title: "Success",
      color: "#02a10a",
      message: "All right!",
      type: "success",
      status: false,
    },
    error: {
      title: "Error",
      color: "#ce1126",
      message: "All right!",
      type: "error",
      status: false,
    },
    warning: {
      title: "Warning",
      color: "#ffb400",
      message: "All right!",
      type: "warning",
      status: false,
    },
    info: {
      title: "Info",
      color: "#0092ff",
      message: "All right!",
      type: "info",
      status: false,
    },
    success: {
      title: "Success",
      color: "#02a10a",
      message: "All right!",
      type: "success",
      status: false,
    },
    newGood: {
      title: "",
      price: "",
      description: "",
      category: "",
      url: "",
    },
  },
  authenticationReducer: {
    registered: false,
    auth: false,
  },
};
