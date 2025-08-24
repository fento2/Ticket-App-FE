import { CircleAlert, CheckCircle } from "lucide-react";

interface IModalValidation {
  field: string;
  error?: string;
}

const ModalValidation = ({ field, error }: IModalValidation) => {
  if (!field) return null;

  return (
    <div className="flex items-center gap-1">
      {error ? (
        <CircleAlert className="text-red-500 w-4 h-4" />
      ) : (
        <CheckCircle className="text-green-500 w-4 h-4" />
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default ModalValidation;
