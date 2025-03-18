import {memo} from "react"

export default memo(function Home() {

  return (
    <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <main className="px-3">
    <h1 className="text-center fs-1 text-warning">Web79tory</h1>
    <p className="lead fs-3 text-white">
    **Web79 I.T. Company - Inventory Management**  
    Web79 I.T. provides comprehensive inventory management solutions that keeps track of client and staff records activities. 
    Our system allows for real-time tracking of clients, staffs, and accurate reporting, ensuring optimal inventory control and reducing wastage.
     With user-friendly features and customizable options, Web79 I.T. simplifies inventory processes, boosting efficiency.
    </p>
    <div className="d-grid gap-2 col-6 mx-auto mt-5">
  <button className="btn btn-warning" type="button">Sign Up</button>
  <button className="btn btn-warning mt-4" type="button">Sign In</button>
</div>
  </main>

  <footer className="text-white footer_main bg-dark text-center">
    <p>Developed by Kingsley Web79 staff</p>
  </footer>
</div>

    </>
  )
})