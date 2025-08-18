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
            <SwipeEvent />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-wider text-emerald-800">
              Feature Event
            </h1>
            <div>
              <SlideEvent />
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
            <SwipeEvent />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-wider text-emerald-800">
              Feature Event
            </h1>
            <div>
              <Category />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
