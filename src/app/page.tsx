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
            <h1 className="text-2xl font-semibold tracking-wider ">
              Feature Event
            </h1>
            <div>
              <SlideEvent />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-emerald-800 py-12">
        <div className="max-w-6xl space-y-2 mx-auto">
          <h1 className="text-2xl text-white font-semibold tracking-wider ">
            Top Event
          </h1>
          <div>
            <TopEvent />
          </div>
        </div>
      </div>
      <div className="mx-8">
        <div className="max-w-6xl my-12 grid grid-cols-1 gap-8 mx-auto">
          <div>
            <SwipeEvent />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-wider ">
              Feature Event
            </h1>
            <div>
              <SlideEvent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
