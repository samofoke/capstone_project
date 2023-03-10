import DirectoryMenu from "../../components/directory-menu/directory-menu";

const HomePage = () => {
  const categories = [
    {
      id: 1,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 4,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: 5,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
  ];

  return <DirectoryMenu categories={categories} />;
};

export default HomePage;
