let initialState = {
  friends: [
    {
      id: 1,
      name: "Artur",
      avatar:
        "https://img.freepik.com/premium-vector/minimalist-ink-drawing-samurai-warrior-standing-profile_518698-2435.jpg",
    },
    {
      id: 2,
      name: "Julia",
      avatar:
        "https://img.freepik.com/premium-vector/geisha-silhouette-cyberpunk-pattern-black-white-illustration_894890-28643.jpg",
    },
    {
      id: 3,
      name: "Nastya",
      avatar:
        "https://img.freepik.com/premium-vector/woman-kimono-sits-front-tree-with-flowers_959938-128.jpg",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
