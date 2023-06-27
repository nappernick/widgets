export declare function useConditionalHandler<T extends (...args: any[]) => void | boolean | Promise<boolean>>(handler?: T): (...params: Parameters<T>) => Promise<boolean>;
