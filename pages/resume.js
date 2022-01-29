import dynamic from "next/dynamic";
import Link from "next/link";
import useWindowDimensions from "../utils/hooks/useWindowDimension.ts";

const PdfViewer = dynamic(() => import("../components/pdfViewer"), {
  ssr: false,
});

function Resume() {
  const { windowWidth } = useWindowDimensions();

  return (
    <>
      <div className="w-full md:pr-8 pt-6 bg-gray-800">
        <div className="text-white tracking-widest flex justify-end">
          <Link href="/">back home</Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <PdfViewer url="/resume.pdf" mobile={windowWidth < 640} />
      </div>
    </>
  );
}

export default Resume;
