import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

// Define decryptOptions correctly
const decryptOptions = {
  chars: "-./!*?#%&@$€()[]{}<>~0123456789abcdefghijklmnopqrstuvwxyz", // Combine all characters into a single string
  interval: 40,
};

interface TextDecryptProps {
  text: string;
}

const TextDecrypt: React.FC<TextDecryptProps> = ({ text }) => {
  const [result, dencrypt] = useDencrypt(decryptOptions);

  useEffect(() => {
    // Function to update the encrypted text
    const updateText = () => {
      dencrypt(text || ""); // Decrypt the current text
    };

    const action = setTimeout(updateText, 0); // Schedule an update in the next event loop iteration

    return () => clearTimeout(action); // Clean up the timeout on component unmount or when `text` changes
  }, [dencrypt, text]);

  return (
    <div className="dark:text-white opacity-90  dark:opacity-85 mb-2">
      <h1 className="font-semibold">{result}</h1>
    </div>
  );
};

export default TextDecrypt;
