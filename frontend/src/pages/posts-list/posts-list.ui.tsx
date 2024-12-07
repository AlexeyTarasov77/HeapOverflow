import { ReactNode, useEffect, useState } from "react";
import { FOOTER_LINKS, POSTS, SIDEBAR_LINKS } from "../../app/constants";
import { Badge } from "../../widgets";
import { Select } from "../../widgets/select";

interface IPostData {
  name: string;
  body: string;
  authorName: string;
  createdAt: Date;
  category: string;
}

function Link({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      className="text-orange-500 transition-colors uppercase font-semibold text-2xl hover:text-orange-600 active:text-red-500"
      href={href}
    >
      {children}
    </a>
  );
}

function Post({
  postData,
  badgeOnClick
}: {
  postData: IPostData;
  badgeOnClick?: React.MouseEventHandler<HTMLSpanElement>;
}) {
  return (
    <div className="bg-orange-500 p-3 flex flex-col gap-3 rounded transition-colors hover:bg-orange-600">
      <div>
        <h3 className="text-white font-semibold text-2xl">{postData.name}</h3>
      </div>
      <div>
        <Badge onClick={badgeOnClick}>{postData.category}</Badge>
      </div>
      <div>
        <p className="text-lg text-slate-300">{postData.body}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-gray-200 text-lg font-mono font-semibold">
            By: {postData.authorName}
          </h5>
        </div>
        <div>
          <h5 className="text-gray-200 text-lg font-mono font-semibold">
            Created at: {postData.createdAt.toISOString()}
          </h5>
        </div>
      </div>
    </div>
  );
}

export function PostsList() {
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
              <Link href={link.href}>{link.name}</Link>
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
            <Link href={link.href}>{link.name}</Link>
          ))}
        </div>
      </footer>
    </>
  );
}
