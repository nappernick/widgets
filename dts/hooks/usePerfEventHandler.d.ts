import { PerfEventHandlers } from 'state/swap/perf';
/**
 * PerfEventHandlers all take two arguments: args and event.
 * This wraps those arguments so that the handler is called before the event is executed, for more accurate instrumentation.
 */
export declare function usePerfEventHandler<Key extends keyof PerfEventHandlers, Params extends Parameters<NonNullable<PerfEventHandlers[Key]>>, Args extends Params[0], Event extends Params[1] & Promise<Awaited<Params[1]>>, Handler extends PerfEventHandlers[Key] & ((args: Args, event: Event) => void)>(name: Key, args: Args | undefined, callback: () => Event): () => Event;
