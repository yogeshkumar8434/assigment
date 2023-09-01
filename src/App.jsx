import "./App.css";
function App() {
  return (
    <>
      <div className="cont">
        <div className="logo">
          <img src="/person_two.png"></img>
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>Course</li>
            <li>Events</li>
            <li>Report</li>
          </ul>
        </div>

        <div className="profile">
          <p>
            <b>Hii David ></b>
          </p>
          <img src="/person_four.jpg"></img>
          <span>icon 1</span>
          <span>icon 2</span>
          <span>icon 3</span>
        </div>
      </div>
      <div className="subCon">
        <ul>
          <li>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5243 0.0993558L1.22926 6.0369C0.827235 6.26783 0.878322 6.82739 1.27813 6.99614L3.63922 7.98647L10.0206 2.36424C10.1428 2.25543 10.316 2.42197 10.2116 2.54854L4.86086 9.06562V10.8531C4.86086 11.3771 5.49389 11.5836 5.80485 11.2039L7.21528 9.48751L9.98284 10.6466C10.2982 10.7798 10.6581 10.5822 10.7158 10.2425L12.3151 0.650033C12.3906 0.201498 11.9086 -0.122691 11.5243 0.0993558Z"
                fill="#000000"
                fill-opacity="0.4"
              />
            </svg>
            Home
          </li>
          <li>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5243 0.0993558L1.22926 6.0369C0.827235 6.26783 0.878322 6.82739 1.27813 6.99614L3.63922 7.98647L10.0206 2.36424C10.1428 2.25543 10.316 2.42197 10.2116 2.54854L4.86086 9.06562V10.8531C4.86086 11.3771 5.49389 11.5836 5.80485 11.2039L7.21528 9.48751L9.98284 10.6466C10.2982 10.7798 10.6581 10.5822 10.7158 10.2425L12.3151 0.650033C12.3906 0.201498 11.9086 -0.122691 11.5243 0.0993558Z"
                fill="#000000"
                fill-opacity="0.4"
              />
            </svg>
            Course
          </li>
          <li>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5243 0.0993558L1.22926 6.0369C0.827235 6.26783 0.878322 6.82739 1.27813 6.99614L3.63922 7.98647L10.0206 2.36424C10.1428 2.25543 10.316 2.42197 10.2116 2.54854L4.86086 9.06562V10.8531C4.86086 11.3771 5.49389 11.5836 5.80485 11.2039L7.21528 9.48751L9.98284 10.6466C10.2982 10.7798 10.6581 10.5822 10.7158 10.2425L12.3151 0.650033C12.3906 0.201498 11.9086 -0.122691 11.5243 0.0993558Z"
                fill="#000000"
                fill-opacity="0.4"
              />
            </svg>
            Events
          </li>
          <li>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5243 0.0993558L1.22926 6.0369C0.827235 6.26783 0.878322 6.82739 1.27813 6.99614L3.63922 7.98647L10.0206 2.36424C10.1428 2.25543 10.316 2.42197 10.2116 2.54854L4.86086 9.06562V10.8531C4.86086 11.3771 5.49389 11.5836 5.80485 11.2039L7.21528 9.48751L9.98284 10.6466C10.2982 10.7798 10.6581 10.5822 10.7158 10.2425L12.3151 0.650033C12.3906 0.201498 11.9086 -0.122691 11.5243 0.0993558Z"
                fill="#000000"
                fill-opacity="0.4"
              />
            </svg>
            Report
          </li>
        </ul>
      </div>
      <div className="home">
        <div className="grid-con">
          <div className="grid-item">
            <h1>Welcome to your Dashboard David!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus consequuntur exercitationem, atque illo quasi
              placeat natus facere. Praesentium, deserunt exercitationem itaque
              iusto vero laboriosam, voluptatem optio, beatae temporibus velit
              fugiat!
            </p>
            <h2>Instring fact report</h2>
            <div className="record">
              <div className="firstRecord subrecord">
                <h1>420</h1>
                <span>Test</span>
              </div>
              <div className="secRecord subrecord">
                <p>92%</p>
                <span>Test</span>
              </div>
            </div>
            <button>See Full Report</button>
          </div>
          <div className="grid-item grid2">
            <div className="secGrid">Hello</div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
