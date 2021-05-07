import "./App.css";
import React from "react";
import CardWithDescription from "./components/card";
function App() {
  return (
    <div className="w-full sm:grid sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2  px-8 2xl:bg-red-400">
      <div className="m-3">
        <CardWithDescription
          imageSrc="https://images.unsplash.com/photo-1620316398062-b860cd7c20c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          name="Alireza Zarafshani"
          description={`An artist who want keep the\nmoments in his jar of frozen\nframes.`}
        ></CardWithDescription>
      </div>
      <div className="m-3">
        <CardWithDescription
          imageSrc="https://lh3.googleusercontent.com/pw/ACtC-3fV2mNbKzvwxA_jcePY1x8jZojIlawBXMflIGvUuhM3KRXUhNuAALIg2-5flJzOLhsQGckZZOfVQbl_L-BeKaieVm5YWF_Tj9gcLAoZ3Kvod0Qq-_w9M5J5UPYT-YYWYRsQfzyKQqG28b981EaNd7aNqg=w712-h949-no?authuser=0"
          name="Rishi Mukherjee"
          description={`This is Rishi Mukherjee. work.He likes to tinker with stuff and plays with computers.\nHe is currently trying to learn Tailwind Css using react.\nThe current end goal of this
            project is to make a UI Kit that can be thrown into any frontend
            React based project and it should just work .\nHiii I am
            RAGAdox`}
        ></CardWithDescription>
      </div>
      <div className="m-3">
        <CardWithDescription
          imageSrc="https://images.unsplash.com/photo-1620405172510-d0c1766841ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          name="John Thomas"
          description={`John Thomas @capturelight\nPublished on May 7, 2021\nFree to use under the Unsplash License`}
          price="Rs. 10000"
        />
      </div>
      <div className="m-3">
        <CardWithDescription
          imageSrc="https://images.unsplash.com/photo-1620252886020-8071287eb983?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          name="Marlon Alves"
          description={`Download free,\nbeautiful high-quality\nphotos curated by Marlon.`}
          price="499 USD"
        ></CardWithDescription>
      </div>
    </div>
  );
}

export default App;
