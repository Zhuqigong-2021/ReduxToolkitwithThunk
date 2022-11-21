import "./styles.css";
import { PostList } from "./redux/post/PostList";
import AddPostForm from "../src/redux/post/AddPostForm";
export default function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList />
    </div>
  );
}
