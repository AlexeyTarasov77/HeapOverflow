import { Badge } from "../../../shared/ui";

interface IPostData {
    name: string;
    body: string;
    authorName: string;
    createdAt: Date;
    category: string;
  }

export function Post({
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