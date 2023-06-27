import { Transaction } from 'state/transactions';
interface TransactionStatusProps {
    tx: Transaction;
    onClose: () => void;
}
export default function TransactionStatusDialog({ tx, onClose }: TransactionStatusProps): import("react/jsx-runtime").JSX.Element;
export {};
