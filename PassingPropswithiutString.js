// passing props apart from string value.
import joke from "./Joke"

export default function App() {
return ( 
<div>
<joke
   punchline="hahahahahhaa"
   isPun={true}
   upvotes={10}
   downvotes={2}
   comments={[{author: "", body: "", title: ""}]}
/>
<div/>
)
}
