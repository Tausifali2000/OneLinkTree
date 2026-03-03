import Link from "next/link";
import { Button } from "../ui/button";
import { IoIosArrowRoundBack } from "react-icons/io";

export const PageHeader: React.FC<any> = () => {
  return (
    <div className="px-1 py-3">
      <Link href="/" >
        <Button variant="outline" size="lg" >
          <IoIosArrowRoundBack size={22}/> Home
        </Button>
      </Link>
    </div>
  );
};
