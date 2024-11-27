import { useSetAtom } from "jotai";
import { newVotersAtom } from "../atoms/allocationAtoms";


export const useUpdateNewVoters = () => {
    // Access the new votes setter function.
    const setNewVoters = useSetAtom(newVotersAtom);

    // Update the allocation based on the ID.
    const updateNewVoters = (to: string, presence: number, percentage: number) => {
        // Update the allocations in the global store.
        setNewVoters(() => ({
            // Update the new votes.
            to: to,
            presence: presence,
            percentage: percentage,
            proportion: percentage / 100
        }));
    };

    // Return the update function.
    return updateNewVoters;
};
