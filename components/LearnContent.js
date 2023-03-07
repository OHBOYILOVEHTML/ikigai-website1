import Image from "next/image";
import Link from "next/link";
import InitialHero from "../components/InitialHero";

export default function Blog() {
  // Define the list of blog posts
  const blogPosts = [
    {
      title: "Science",
      author: "Zach Masserella",
      date: "22/10/22",
      body: "Hello i am Zach",
    },
    {
      title: "Code",
      author: "Zach Masserella",
      date: "01/11/22",
      body: "The website blog works",
    },
  ];

  // Define a function that returns the HTML for a single blog post
  function blogPost(post) {
    return (
      <div className="bg-white px-6 py-8 shadow-xl sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 w-full">
        <div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h1 className="text-3xl text-bold">{post.title}</h1>
              <h1 className="text-lg italic">By {post.author}</h1>
            </div>
            <div className="flex flex-row justify-self-end">
              <h1 className="text-xl">{post.date}</h1>
            </div>
          </div>
          <div>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    );
  }

  // Use the blogPost function to render each blog post in the blogPosts list
  return (
    <section className="relative min-h-fit justify-center pb-20 pt-28">
      <div className="font-sans p-10 text-left grid grid-cols-1 gap-12">
        {blogPosts.map((post) => {
          return blogPost(post);
        })}
      </div>
    </section>
  );
}
