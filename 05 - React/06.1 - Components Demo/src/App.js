import './App.css';
import {
  Comment,
  ClassComponent,
  FunctionalComponent,
  MultiplePropsComponent,
  MultiplePropsClassComponent
} from './Components';

const comment = {
  date: new Date(),
  text: "I love learning React",
  author:{
    name: "Nino Škuflić",
    avatarUrl: "https://miro.medium.com/max/1000/0*5bjkLBf1VvAiMwhp"
  }
}

function App() {
  return (
    <div>
      {/* <ClassComponent name="Nino"/>
      <FunctionalComponent name="John"/>
      
      <Comment 
      date={comment.date}
      text={comment.text}
      author={comment.author}
      /> */}


      <MultiplePropsComponent/>

      <MultiplePropsClassComponent
      name="Dragana"
      age="67"
      />

    </div>
  );
}

export default App;