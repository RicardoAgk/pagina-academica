import styles from "../styles/postList.module.css";
import postsData from "../data/posts.json";

type Props = {
  searchTerm: string;
  selectedCategory: string;
};

const PostList = ({ searchTerm, selectedCategory }: Props) => {
  const filtered = postsData.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.categories.includes(selectedCategory)
      : true;

    const matchesSearch = searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.gridContainer}>
      {filtered.map((post) => (
        <div key={post._id} className={styles.card}>
          <h4 className={styles.title}>{post.title}</h4>
          <p className={styles.excerpt}>{post.content.substring(0, 150)}...</p>
          <p className={styles.date}>{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
4