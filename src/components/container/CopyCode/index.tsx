import BlurFade from "@/components/ui/blur-fade";
import { useEffect, useState } from "react";
import { FaRegPaste, FaCircleCheck } from "react-icons/fa6";

interface PropTypes {
  title: string;
  code: string;
}

const CopyCode = ({ title, code }: PropTypes) => {
  const [isCopy, setIsCopy] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopy(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  }, [isCopy]);

  return (
    <div>
      <h1 className="text-lg font-medium mb-3 text-slate-800">{title}</h1>
      <pre>
        <div className="px-6 py-3 bg-zinc-900 rounded-lg flex justify-between items-center shadow-xl">
          <div className="text-gray-200 text-sm">{code}</div>
          {isCopy ? (
            <div className="relative">
              <BlurFade>
                <h1 className="absolute text-xs text-white bg-zinc-900 -top-10 -left-5 py-1.5 px-3 rounded ">
                  Copied!
                </h1>
              </BlurFade>
              <button
                className="border border-gray-500 p-2 rounded "
                onClick={() => handleCopy()}
              >
                <FaCircleCheck className="text-green-300 text-xs" />
              </button>
            </div>
          ) : (
            <button
              className="border border-gray-500 p-2 rounded hover:bg-zinc-800"
              onClick={() => handleCopy()}
            >
              <FaRegPaste className="text-gray-500 text-xs" />
            </button>
          )}
        </div>
      </pre>
    </div>
  );
};

export default CopyCode;
