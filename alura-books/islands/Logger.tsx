import { useEffect } from "preact/hooks";

interface LoggerProps {
  data: unknown;
}

export default function Logger({ data }: LoggerProps) {
  useEffect(() => {
    window.console.log(data);
  }, []);

  return null;
}
