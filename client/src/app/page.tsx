import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopicCreator from "@/components/TopicCreator";
import { redis } from "@/lib/redis";
import { Star } from "lucide-react";

export default async function Home() {
  const servedRequests = await redis.get("served-requests");

  return (
    <section className="min-h-screen bg-grid-zinc-50">
      <MaxWidthWrapper className="relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="hidden lg:block absolute inset-0 top-8"></div>

        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center flex flex-col items-center">
            <h1 className="relative leading-snug w-fit tracking-tight text-balance mt-16 font-bold text-gray-900 text-5xl md:text-6xl">
              Thought{" "}
              <span className="whitespace-nowrap">
                Bl
                <span className="relative">
                  i
                  <span className="absolute inset-x-0 -top-0.5 -translate-x-3">
                    <Icons.zap className="h-8 w-8 md:h-9 md:w-9" />
                  </span>
                </span>
                tz
              </span>
            </h1>
            <p className=" pt-6 leading-snug w-fit tracking-tight text-balance text-gray-700">
              Pick a topic and share your thoughts.
            </p>
            <TopicCreator />

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
              <div className="flex flex-col gap-1 justify-between items-center sm:items-start">
                <p>
                  <span className="font-semibold">
                    <Icons.zap className="inline-block h-5 w-5 text-yellow-400 fill-yellow-400" />{" "}
                    {Math.ceil(Number(servedRequests) / 10) * 10}
                  </span>{" "}
                  thoughts added
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
