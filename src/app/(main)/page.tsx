"use client";

import { useState } from "react";
import useSWR from "swr";
import Thumbnail from "@/components/Thumbnail";
import Loading from "../loading";
import { SearchBadge } from "@/components/SearchBadge";
import { fetchVideos } from "@/lib/api";

export default function Home() {
  const [badge, setBadge] = useState("All");

  const {
    data: videoResults,
    error,
    isLoading,
  } = useSWR(`fetchVideo/${badge}`, () => fetchVideos());

  if (error) {
    throw new Error("Error fetching video data");
  }

  return (
    <>
      <div className="px-2 md:pl-[252px] fixed top-16 py-2 left-0 w-screen z-20 dark:bg-black bg-white">
        <SearchBadge
          badges={["All", "Javascript", "Algorithms"]}
          currentBadge={badge}
          setBadge={setBadge}
        />
      </div>
      <div className="flex flex-wrap">
        {isLoading
          ? Array(9)
              .fill(null)
              .map((_, idx) => <Loading key={idx} />)
          : videoResults?.map((video: any) => (
              <Thumbnail key={video.id} video={video} />
            ))}
      </div>
    </>
  );
}
