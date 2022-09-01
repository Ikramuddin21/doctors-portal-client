import React, { Component, useEffect, useState } from "react";

const PracticeClass = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Functional Component</h1>
      {posts.map((post) => (
        <p>
          {post.id} {post.title}
        </p>
      ))}
    </div>
  );
};

export default PracticeClass;


// class PracticeClass extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             name: "New Class",
//             posts: [],
//             count: 0
//         }
//     }
//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(data => this.setState({posts: data}))
//     }

//     componentDidUpdate() {
//         const {count} = this.state;
//         document.title = `Title ${count}`;
//     }

//     addCount = () => {
//       this.setState(({count}) => ({
//         count: count + 1
//       }))
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello class component</h1>
//                 <button onClick={this.addCount}>Click</button>
//                 {
//                     this.state.posts.map(post => <p>{post.id} {post.title}</p>)
//                 }
//             </div>
//         );
//     }
// }
