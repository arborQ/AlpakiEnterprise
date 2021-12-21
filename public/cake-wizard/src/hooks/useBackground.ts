import { useEffect } from "react";
import DefaultImage from '../images/default.jpg';

export function useBackground(imageUrl: string) {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    return () => {
      document.body.style.backgroundImage = `url('${DefaultImage}')`;
    };
  }, [imageUrl]);

  return 1;
}
