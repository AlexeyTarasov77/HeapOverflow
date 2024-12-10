import { useEffect, useState } from "react";
import { FOOTER_LINKS, POSTS, SIDEBAR_LINKS } from "../../../app/constants";
import { Select } from "../../../shared/ui";
import { PostLink } from "./PostLink";
import { Post } from "./PostPreview";

export function PostsListPage() {
  const [filteredPosts, setFilteredPosts] = useState(POSTS);
  const categoryOptions = new Set(POSTS.map(post => post.category));
  const [currCategory, setCurrCategory] = useState("all");
  useEffect(() => {
    let filterRes = POSTS;
    if (currCategory !== "all") {
      filterRes = POSTS.filter(({ category }) => category === currCategory);
    }
    setFilteredPosts(filterRes);
  }, [currCategory]);
  return (
    <>
      <header>
        <div className="bg-yellow-400 flex gap-7 px-5 py-3">
          {SIDEBAR_LINKS.map(link => (
            <div>
              <PostLink href={link.href}>{link.name}</PostLink>
            </div>
          ))}
        </div>
      </header>
      <main>
        <div className="p-3 bg-slate-200 rounded-lg text-white max-w-fit mb-3">
          <Select
            selectedOptionName={currCategory}
            onChange={e => {
              setCurrCategory(e.target.value);
            }}
            labelText="Category"
            options={[
              ...Array.from(categoryOptions).map(category => ({
                name: category,
                value: category
              })),
              { name: "All", value: "all" }
            ]}
          />
        </div>
        <div className="flex flex-col gap-5 p-3">
          {filteredPosts.map(post => (
            <Post
              key={post.name}
              postData={post}
              badgeOnClick={e => {
                setFilteredPosts(
                  POSTS.filter(
                    ({ category }) => category === e.currentTarget.innerText
                  )
                );
              }}
            />
          ))}
        </div>
      </main>
      <footer className="fixed left-0 bottom-0 w-full">
        <div className="flex gap-7 px-5 py-3 bg-yellow-400">
          {FOOTER_LINKS.map(link => (
            <PostLink href={link.href}>{link.name}</PostLink>
          ))}
        </div>
      </footer>
    </>
  );
}
