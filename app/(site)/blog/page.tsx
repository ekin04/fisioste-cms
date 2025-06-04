import { HeroBlog } from "./components/HeroBlog";
import { GrigliaBlog } from "./components/GrigliaBlog";

export default async function Blog() {
  return (
    <>
      <HeroBlog />
      <GrigliaBlog />
    </>
  );
}
