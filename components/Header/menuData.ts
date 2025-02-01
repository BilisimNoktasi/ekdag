import { Menu } from "@/types";

const menuData: Menu[] = [
    {
      id: 1,
      title: "home",
      newTab: false,
      path: "/",
    },
    {
      id: 2.1,
      title: "corporate",
      newTab: false,
      submenu: [
        {
          id: 38.1,
          title: "ekdag",
          newTab: false,
          path: "/kurumsal/ekdag-as",
        },
        {
          id: 40.1,
          title: "president",
          newTab: false,
          path: "/kurumsal/yonetim/muhittin-bocek",
        },
      ]
    },
    {
        id: 3.1,
        title: "facility",
        newTab: false,
        path: "/hizmetler",
    },
    {
      id: 3.1,
      title: "news",
      newTab: false,
      path: "/news",
    },
    {
      id: 3.1,
      title: "leases",
      newTab: false,
      path: "/kurumsal/kiralamalar",
    },
    {
      id: 4.1,
      title: "gallery",
      newTab: false,
      path: "/galeri",
    },
    {
      id: 2.3,
      title: "blogs",
      newTab: false,
      path: "/blog",
    },
    {
      id: 4,
      title: "contact",
      newTab: false,
      path: "/iletisim",
    },
  ];
  
  export default menuData;