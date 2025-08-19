import Category from "@/components/core/Category";
import SlideEvent from "@/components/core/SlideEvent";
import SwipeEvent from "@/components/core/SwipeEvent";
import TopEvent from "@/components/core/TopEvent";

export default function Home() {
  return (
    <>
      <div className="mx-8">
        <div className="max-w-6xl my-12 grid grid-cols-1 gap-8 mx-auto">
          <div>
            <SwipeEvent title="swipe1" />
          </div>

          <div className="space-y-2">
            <div>
              <SlideEvent title="Feature Event" />
            </div>
          </div>
        </div>
      </div>
      {/* top event */}
      <div className="bg-emerald-700 py-12">
        <div>
          <div className="max-w-6xl space-y-2 mx-auto">
            <h1 className="text-2xl text-white font-bold tracking-wider">
              Top Event
            </h1>
            <div>
              <TopEvent />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8">
        <div className="max-w-6xl my-12 grid grid-cols-1 gap-8 mx-auto">
          <div>
            <Category />
          </div>

          <div className="space-y-2">
            <div>
              <SlideEvent title="Populer di" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
