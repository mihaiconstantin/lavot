import { useSetAtom } from "jotai";
import { allocationsAtom } from "../atoms/allocationAtoms";
import { InputProps } from "../types/InputProps";


export const useUpdateAllocation = () => {
    // Access the allocations setter function.
    const setAllocations = useSetAtom(allocationsAtom);

    // Update the allocation based on the ID.
    const updateAllocation = (id: string, to: string, percentage: number) => {
        // Convert percentage to proportion.
        const proportion = percentage / 100;

        // Update the allocations in the global store.
        setAllocations((prevAllocations: InputProps[]) =>
            prevAllocations.map((a) =>
                a.from === id ? { ...a, to, percentage, proportion } : a
            )
        );
    };

    // Return the update function.
    return updateAllocation;
};
