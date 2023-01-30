export default function ToastMessage({
  type = "success",
  message,
}: {
  type?: string;
  message: string;
}) {
  let color = "bg-success-600";
  switch (type) {
    case "info":
      color = "bg-blue-600";
      break;
    case "error":
      color = "bg-red-600";
      break;
    default:
      color = "bg-green-600";
      break;
  }
  return (
    <div className="w-full relative py-[16px] px-[24px] rounded-md overflow-hidden shadow-sm">
      <div className={`absolute h-full w-1 left-0 top-0 ${color}`}></div>
      <p className="text-sm">{message}</p>
    </div>
  );
}
