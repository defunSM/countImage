import Image from "next/image";
import ImageUpload from "./components/ImageUpload";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>imageCount</div>
      <div>
        <ImageUpload type="Source image" />
        <ImageUpload type="Target image" />
      </div>
    </main>
  );
}
