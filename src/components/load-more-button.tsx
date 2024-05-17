import { Button } from "@/components/ui/button";

type ButtonProps = {
  onClick: () => void;
};

export function LoadMoreButton({ onClick }: ButtonProps) {
  return (
    <div className="my-8 flex justify-center">
      <Button
        className="rounded-md px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        variant="outline"
        onClick={onClick}
      >
        Load More
      </Button>
    </div>
  );
}
