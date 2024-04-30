const User=()=>{
  return (
  <div className="h-full w-full bg-background-primary overflow-auto flex justify-center">
    <div className="bg-background-secondary border-Accent text-sm sm:text-xl w-fit rounded-md m-2 border-2 h-fit p-2 align-top flex-wrap flex">
      <div className="avatar">
        <div className="rounded-xl w-36 h-36">
          <img src="https://avatar.iran.liara.run/public/boy?username=John" className="w-fit" />
        </div>
      </div>
      <div className="divider sm:divider-horizontal" />
        <div className="my-2">
          <div className="Name text-foreground-secondary w-fit" >Name <span className="text-foreground-primary">John Doe</span></div>
          <div className="Name text-foreground-secondary w-fit" >Department <span className="text-foreground-primary">Computer and Information Science</span></div>
          <div className="Name text-foreground-secondary w-fit" >Course <span className="text-foreground-primary">BCA</span></div>
          <div className="Name text-foreground-secondary w-fit" >Course Type <span className="text-foreground-primary">UG</span></div>
          <div className="Name text-foreground-secondary w-fit" >Roll No. <span className="text-foreground-primary">BCA3700032</span></div>
          <div className="Name text-foreground-secondary w-fit" >Registration No. <span className="text-foreground-primary">4209370021</span></div>
          <div className="Name text-foreground-secondary w-fit" >Session <span className="text-foreground-primary">2031-2032</span></div>
          <div className="divider text-Accent" >Personal Info</div>
          <div className="Name text-foreground-secondary w-fit" >Guardian's Name <span className="text-foreground-primary">Johan Doe</span></div>
          <div className="Name text-foreground-secondary w-fit" >DOB <span className="text-foreground-primary">20/04/2014</span></div>
          <div className="Name text-foreground-secondary w-fit" >Gender <span className="text-foreground-primary">Male</span></div>
          <div className="Name text-foreground-secondary w-fit" >Address <span className="text-foreground-primary text-wrap">Shaitan Gali,Khatra Mahel, AndherNagar, S/D, WB, India, 746290</span></div>
          <div className="Name text-foreground-secondary w-fit" >Contact No. <span className="text-foreground-primary">7014169420</span></div>
          <div className="divider text-Accent" >Current Semester</div>
          <div className="Name text-foreground-secondary w-fit" >Current Semester <span className="text-foreground-primary">III</span></div>
          <table className="table max-w-md sm:max-w-full">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Title</th>
                <th>Subject Teacher</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>BCAH5</td><td>Concept of OOPs</td><td>SC</td></tr>
              <tr><td>BCAH6</td><td>React Programming</td><td>RK</td></tr>
              <tr><td>BCASDE5</td><td>Integreated Machine</td><td>SAK</td></tr>
              <tr><td>MTMGE3</td><td>Theory of Probablity</td><td>AD</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default User;
