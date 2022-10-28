import Image from "next/image";
import Link from "next/link";

import InitialHero from "../components/InitialHero";


export default function Blog() {
  //content is a 2d array --> content[k] is a list containing 4 items, title of post, author of post, date of post, body text of post
  var list=[
    ["Science","Zach Masserella","22/10/22","Hello i am Zach"],
    ["Code","James Masserella","35/10/22","Hello i am not Zach"],
    ["Shrek","Haryy Masserella","34/10/22","Hello i am not Zach"],
    ["Shrek","Haryy Masserella","34/10/22","Hello i am not Zach"]
  ]
  function blogPost(list){
    var title=list[0];
    var date=list[1];
    var author=list[2];
    var body=list[3];
    return (
      <div class="bg-white px-6 pt-10 pb-8 shadow-xl sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 w-full">
        <div>
          <h1 className="text-2xl">{title}</h1>
          <h1 className="text-xl">{date}</h1>
          <h1 className="text-xl">{author}</h1>
          <p>{body}</p>
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
