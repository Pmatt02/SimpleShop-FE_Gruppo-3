import { toast } from "sonner";

export const showCheckoutToast = (navigate: () => void) => {
  toast(
    <div>
      <p className="text-sm text-muted-foreground">
        Checkout has been completed
      </p>
      <button
        onClick={() => {
          navigate();
          toast.dismiss();
        }}
        className="mt-2 text-blue-600 hover:underline"
      >
        Go to Home
      </button>
    </div>
  );
};