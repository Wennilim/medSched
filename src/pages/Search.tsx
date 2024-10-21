import { CategoryList } from "@/components/custom/CategoryList";
import { Doctors } from "@/components/custom/Doctors";

export const Search = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="hidden md:block">
                <CategoryList />
            </div>
            <div className="col-span-4 md:col-span-3">
                <Doctors />
            </div>
        </div>
    );
}
