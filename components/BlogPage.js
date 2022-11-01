import Image from "next/image";
import Link from "next/link";

import InitialHero from "../components/InitialHero";


export default function Blog() {
  //content is a 2d array --> content[k] is a list containing 4 items, title of post, author of post, date of post, body text of post (IN THAT ORDER)
  var list=[
    ["Science","Zach Masserella","22/10/22","Hello i am Zach"],
    ["Code","Zach Masserella","01/11/22","The website blog works"]
  ]
  function blogPost(list){
    var title=list[0];
    var author=list[1];
    var date=list[2];
    var body=list[3];
    //HTML for each individual blog post below
    return (
      <div className="bg-white px-6 pt-8 pb-8 shadow-xl sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 w-full">
        <div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h1 className="text-3xl text-bold">{title}</h1>
              <h1 className="text-lg italic">By {author}</h1>
            </div>
            <div className="flex flex-row justify-self-end">
              <h1 className="text-xl">{date}</h1>
            </div>
          </div>
          <div>
            <p>{body}</p>
          </div>
        </div>
      </div>
    );
  }
  //{blogPost(list[0][0],list[0][1],list[0][2],list[0][3])}
  return (
    <>
      <section className="relative min-h-fit justify-center pb-20 pt-28">
        <div className="font-sans p-10 text-left grid grid-cols-1 gap-12">
          {list.map(x => {return blogPost(x)})}
        </div>
      </section>
    </>
  );
}
