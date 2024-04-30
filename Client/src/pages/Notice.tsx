import NoticeBubble from "../components/NoticeBubble";

const Notice=()=>{
  return (
  <div className="h-full max-w-full bg-background-primary flex flex-col items-center " >
    <NoticeBubble sender={"Prof. S. Alexender"} sendTime={"17.08"} senderType="Faculty">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
      </NoticeBubble>
    <NoticeBubble sender={"Prof C. Axionne"} sendTime={"18.23"} senderType="Admin">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
      </NoticeBubble>
    </div>
  )
}

export default Notice;
