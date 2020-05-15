const initState = {
  posts: [
    {
      id: "1",
      title: "Squirrile laid an egg",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen",
    },
    {
      id: "2",
      title: "Charmander laid an egg",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen",
    },
    {
      id: "3",
      title: "a Helix Fossil was found",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });

    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
