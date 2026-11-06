import { useCounterContext } from "./CounterContext";

export default function ContextCounterReset() {
  const { reset } = useCounterContext();
  return (
    <div id="wd-context-counter-reset">
      <button
        type="button"
        onClick={reset}
        id="wd-context-reset-to-seven"
        className="rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
      >
        Reset to 7
      </button>
    </div>
  );
}
