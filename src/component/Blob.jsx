import KUTE from "kute.js";

const Blob = () => {
  const tween = KUTE.fromTo(
    "blob1",
    { path: "blob1" },
    { path: "blob2" },
    { repeat: 999, duration: 3000, yoyo: true }
  );
  tween.start();
  return (
    <>
      <div className="blob">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(436.27441775626863 252.51775619249088)">
            <path
              id="blob1"
              d="M107.8 -111.5C149.1 -93.7 198.7 -68.8 216.4 -29.1C234.2 10.5 220.1 64.7 195.9 119C171.6 173.3 137.1 227.6 93.4 233.6C49.6 239.6 -3.4 197.3 -57.3 171.6C-111.2 145.9 -166 136.7 -186.7 105.5C-207.3 74.4 -193.8 21.3 -173.2 -19.3C-152.7 -60 -125.2 -88.2 -95.2 -107.9C-65.1 -127.6 -32.6 -138.8 0.3 -139.2C33.2 -139.6 66.4 -129.2 107.8 -111.5"
              fill="#02784a"
            ></path>
          </g>
          <g transform="translate(454.6390031564697 304.90452297737363)">
            <path
              id="blob2"
              d="M162.9 -203.4C197.2 -165.3 201.5 -100.8 207.7 -40.3C214 20.1 222.2 76.6 203.7 126.2C185.3 175.7 140.2 218.5 89.5 230C38.9 241.5 -17.3 221.8 -63.5 195.7C-109.6 169.7 -145.8 137.3 -177 96C-208.2 54.7 -234.6 4.3 -220.4 -32.3C-206.1 -69 -151.3 -91.9 -107.8 -128.4C-64.3 -164.9 -32.1 -215 16.1 -234.1C64.3 -253.3 128.6 -241.5 162.9 -203.4"
              fill="#02784a"
            ></path>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Blob;
