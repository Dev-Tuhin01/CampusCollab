import react from "react";
interface BubbleProps {
  sender:String,
  sendTime:String,
  senderType: "Admin" | "Faculty",
  children:react.ReactNode
}

const NoticeBubble = (props:BubbleProps) =>{
  const color = props.senderType === "Admin"?"#0f172a":"#881337";
  return (
  <div className="border-8 border-background-primary h-fit rounded-md w-11/12 md:w-9/12 p-2 gap-x-8 text-foreground-primary " style={{backgroundColor:color}}>
    <div className="text-lg h-fit text-justify">{props.children}</div>
    <div className="divider" />
    <div className="text-xs text-foreground-secondary flex justify-around">
      <span className="w-10/12">    {props.sender} </span>
      <div className="divider divider-horizontal"/>
      {props.sendTime}
      </div>
    </div>
  )
}

export default NoticeBubble;
