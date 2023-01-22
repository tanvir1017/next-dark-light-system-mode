import Link from "next/link";

function Blogs() {
  return (
    <div className="grid place-items-center h-screen ">
      <Link href="/">
        <button className="border-2 border-black px-5 py-2">Back</button>
      </Link>
      <h1 className="text-4xl">This is blog page.</h1>
      <p>This page will not affected by the theme</p>
    </div>
  );
}
Blogs.theme = "light";
export default Blogs;
