import { TransactionInfo } from 'state/transactions';
/**
 * Returns a callback to submit a transaction.
 *
 * Returns a boolean indicating whether the transaction was submitted.
 * For example, will return false if the user rejected the transaction.
 *
 * For other types of errors, `submit` should throw.
 * */
export default function useOnSubmit(): (submit: () => Promise<TransactionInfo | void>) => Promise<boolean>;
