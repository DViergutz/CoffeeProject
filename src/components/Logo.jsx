import React, { useEffect, useState } from "react";

function Logo({ cursor, logoRef }) {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (logoRef.current && cursor.x != null && cursor.y != null) {
      const cardRect = logoRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / cardRect.width) * 100;
      const cyPercentage = (cursor.y / cardRect.height) * 100;
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, logoRef]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 500 500"
      /* strokeWidth={1.5}
      stroke="currentColor" */
      className="svg-utica"
      version="1.1"
    >
      <defs>
        <radialGradient
          id="gradient"
          gradientUnits="userSpaceOnUse"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          <stop stopColor="#ee7828" />
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>

      <path
        d="M 54.174 52.314 L 52 54.629 52 138.880 C 52 223.529, 52.095 226.028, 55.400 228.235 C 56.723 229.118, 122.522 229.235, 125.790 228.359 C 131.109 226.934, 131 228.806, 131 138.696 L 131 55.292 128.548 52.646 C 126.186 50.098, 125.695 50, 115.236 50 C 105.690 50, 104.112 50.247, 102.189 52.039 C 100.985 53.160, 99.896 54.173, 99.769 54.289 C 99.641 54.405, 99.304 83.075, 99.019 118 L 98.500 181.500 91.500 181.500 L 84.500 181.500 84 117.854 C 83.522 57.054, 83.415 54.115, 81.595 52.104 C 79.866 50.194, 78.613 50, 68.019 50 C 57.113 50, 56.206 50.152, 54.174 52.314 M 144.557 52.223 C 143.278 54.048, 143 57.900, 143 73.788 C 143 85.210, 143.424 93.924, 144.035 95.066 C 144.950 96.775, 146.204 97, 154.835 97 C 161.097 97, 165.031 97.431, 165.800 98.200 C 166.708 99.108, 167 114.784, 167 162.629 C 167 218.776, 167.176 226.033, 168.571 227.429 C 170.873 229.731, 195.127 229.731, 197.429 227.429 C 198.824 226.033, 199 218.810, 199 163.010 C 199 128.445, 199.273 99.452, 199.607 98.582 C 200.096 97.307, 201.903 97, 208.907 97 C 214.335 97, 218.051 96.549, 218.800 95.800 C 219.656 94.944, 220 88.660, 220 73.871 C 220 56.361, 219.756 52.899, 218.429 51.571 C 217.059 50.202, 212.308 50, 181.485 50 L 146.113 50 144.557 52.223 M 234.655 51.829 C 233.265 53.365, 233 56.137, 233 69.138 C 233 79.976, 233.375 85.112, 234.250 86.266 C 235.289 87.635, 237.799 87.949, 249.086 88.118 C 256.558 88.230, 263.195 87.997, 263.836 87.602 C 264.649 87.099, 265 81.640, 265 69.476 C 265 53.291, 264.864 51.998, 263.066 51.035 C 262.002 50.466, 255.547 50, 248.721 50 C 237.967 50, 236.089 50.244, 234.655 51.829 M 283.635 52.073 L 281 54.145 281 140.073 C 281 224.667, 281.031 226.031, 283 228 C 284.921 229.921, 286.333 230, 318.809 230 C 346.429 230, 352.973 229.740, 354.559 228.581 C 356.369 227.257, 356.500 225.803, 356.500 207 C 356.500 188.197, 356.369 186.743, 354.559 185.419 C 353.047 184.314, 348.502 184, 334.009 184 C 320.869 184, 315.047 183.647, 314.200 182.800 C 313.306 181.906, 313 171.218, 313 140.882 C 313 118.487, 313.273 99.452, 313.607 98.582 C 314.132 97.215, 316.839 97, 333.534 97 L 352.855 97 354.927 94.365 C 356.854 91.916, 357 90.431, 357 73.317 L 357 54.905 354.354 52.452 L 351.708 50 318.989 50 C 287.402 50, 286.179 50.072, 283.635 52.073 M 371.612 51.570 C 371.275 52.446, 371 92.187, 371 139.882 C 371 205.996, 371.285 226.885, 372.200 227.800 C 373.663 229.263, 398.728 229.457, 401 228.022 C 402.253 227.232, 402.582 222.576, 403 199.788 L 403.500 172.500 409.500 172.500 L 415.500 172.500 415.767 199.418 C 415.943 217.233, 416.407 226.786, 417.139 227.668 C 417.959 228.655, 421.642 228.996, 431.372 228.985 C 438.593 228.976, 445.065 228.611, 445.755 228.172 C 446.750 227.541, 446.958 209.027, 446.755 138.938 L 446.500 50.500 409.362 50.238 C 376.147 50.004, 372.159 50.144, 371.612 51.570 M 403.710 97.623 C 403.320 98.014, 403 107.660, 403 119.060 C 403 142.074, 402.659 141, 409.959 141 C 412.047 141, 414.270 140.380, 414.899 139.622 C 415.695 138.663, 415.960 132.055, 415.771 117.872 L 415.500 97.500 409.960 97.206 C 406.913 97.045, 404.101 97.232, 403.710 97.623 M 234.035 109.934 C 233.356 111.203, 233 131.488, 233 168.863 C 233 219.343, 233.180 226.037, 234.571 227.429 C 235.832 228.689, 238.612 229, 248.637 229 C 255.509 229, 262.002 228.534, 263.066 227.965 C 264.944 226.959, 265 225.239, 265 168.072 C 265 115.324, 264.836 109.151, 263.418 108.607 C 262.548 108.273, 255.814 108, 248.453 108 C 236.245 108, 234.979 108.170, 234.035 109.934 M 120.655 243.829 C 119.151 245.491, 119 251.576, 119 310.629 C 119 359.829, 119.291 375.891, 120.200 376.800 C 121.796 378.396, 176.556 378.527, 177.538 376.938 C 178.630 375.172, 178.759 247.738, 177.672 245.500 C 177.138 244.400, 176.205 243.169, 175.600 242.765 C 174.995 242.361, 162.757 242.024, 148.405 242.015 C 124.383 242.001, 122.178 242.145, 120.655 243.829 M 53.502 245.357 C 52.142 247.433, 51.989 255.442, 52.228 312.308 C 52.444 363.642, 52.766 377.168, 53.798 378.200 C 54.777 379.180, 61.257 379.574, 80.148 379.799 C 101.591 380.056, 105.546 379.872, 107.600 378.526 C 109.955 376.984, 110 376.674, 110 362.132 C 110 349.138, 109.778 347.109, 108.203 345.684 C 106.752 344.371, 103.619 344.004, 91.953 343.779 L 77.500 343.500 77.500 311.213 L 77.500 278.926 92.332 278.713 C 105.720 278.521, 107.301 278.311, 108.582 276.559 C 110.300 274.207, 110.617 248.022, 108.965 244.934 C 107.981 243.097, 106.607 243, 81.488 243 L 55.046 243 53.502 245.357 M 191.035 244.934 C 189.682 247.463, 189.627 375.861, 190.978 378 C 191.675 379.103, 194.289 379.591, 200.851 379.845 C 214.889 380.388, 213.917 382.286, 214.232 353.724 L 214.500 329.500 229.500 329 C 237.750 328.725, 245.063 328.136, 245.750 327.691 C 246.660 327.102, 247 322.720, 247 311.563 C 247 298.553, 246.751 296.038, 245.351 294.872 C 244.189 293.905, 239.388 293.352, 229.101 293 L 214.500 292.500 214.206 285.841 L 213.913 279.181 229.494 278.841 C 241.991 278.567, 245.263 278.203, 246.022 277 C 247.312 274.957, 247.262 247.359, 245.965 244.934 C 244.981 243.097, 243.607 243, 218.500 243 C 193.393 243, 192.019 243.097, 191.035 244.934 M 257.655 244.829 C 256.151 246.491, 256 252.552, 256 311.290 L 256 375.922 258.189 377.961 C 260.041 379.687, 261.692 379.998, 268.939 379.985 C 273.647 379.976, 278.054 379.617, 278.732 379.187 C 279.640 378.610, 280.034 371.984, 280.232 353.952 L 280.500 329.500 295.601 329 C 306.315 328.645, 311.181 328.101, 312.351 327.128 C 313.747 325.966, 314 323.482, 314 310.934 C 314 292.120, 314.888 293, 295.900 293 C 280.037 293, 279.736 292.844, 280.195 284.831 L 280.500 279.500 295.600 279 C 306.312 278.645, 311.179 278.101, 312.350 277.128 C 313.747 275.966, 314 273.493, 314 261.033 C 314 248.040, 313.785 246.116, 312.171 244.655 C 310.570 243.206, 307.166 243, 284.826 243 C 261.376 243, 259.176 243.148, 257.655 244.829 M 324.200 244.200 C 323.291 245.109, 323 261.343, 323 311.143 L 323 376.887 325.223 378.443 C 327.088 379.750, 331.401 380, 352.068 380 C 374.651 380, 376.827 379.849, 378.345 378.171 C 379.726 376.646, 379.997 373.952, 379.985 361.921 C 379.976 353.990, 379.544 346.825, 379.024 346 C 378.275 344.812, 374.899 344.396, 362.789 344 L 347.500 343.500 347.500 336.500 L 347.500 329.500 362.500 329 C 370.750 328.725, 378.063 328.136, 378.750 327.691 C 379.660 327.102, 380 322.727, 380 311.596 C 380 298.057, 379.791 296.121, 378.171 294.655 C 376.645 293.273, 373.920 293, 361.671 293 L 347 293 347 286 C 347 280.020, 347.255 278.992, 348.750 278.946 C 349.712 278.917, 356.056 278.940, 362.847 278.998 C 380.610 279.149, 380 279.775, 380 261.411 C 380 253.299, 379.542 246.013, 378.965 244.934 C 377.982 243.097, 376.609 243, 351.665 243 C 332.570 243, 325.072 243.328, 324.200 244.200 M 391.571 244.571 C 390.175 245.968, 390 253.379, 390 311.071 C 390 374.667, 390.041 376.041, 392 378 C 393.891 379.891, 395.333 380, 418.566 380 C 433.587 380, 443.883 379.598, 445.066 378.965 C 446.853 378.009, 447 376.728, 447 362.165 C 447 351.237, 446.632 346.032, 445.800 345.200 C 444.976 344.376, 440.002 344, 429.907 344 C 413.465 344, 414 344.252, 414 336.500 C 414 328.748, 413.465 329, 429.907 329 C 440.002 329, 444.976 328.624, 445.800 327.800 C 446.628 326.972, 447 321.883, 447 311.371 C 447 298.861, 446.720 295.862, 445.429 294.571 C 444.140 293.283, 441.163 293, 428.883 293 L 413.909 293 414.204 286.250 L 414.500 279.500 429.500 279 C 437.750 278.725, 445.063 278.136, 445.750 277.691 C 447.483 276.569, 447.529 245.929, 445.800 244.200 C 444.929 243.329, 437.549 243, 418.871 243 C 396.815 243, 392.919 243.224, 391.571 244.571 M 143.454 279.260 C 143.188 279.953, 143.090 294.465, 143.235 311.510 L 143.500 342.500 148.500 342.500 L 153.500 342.500 153.764 310.250 L 154.028 278 148.982 278 C 145.848 278, 143.754 278.477, 143.454 279.260 M 158.897 398.624 C 158.359 399.272, 158.078 410.272, 158.232 424.624 L 158.500 449.500 162.750 449.807 L 167 450.115 167 441.988 C 167 434.132, 167.075 433.872, 169.250 434.180 C 171.332 434.476, 171.522 435.078, 171.792 442.250 L 172.084 450 176.542 450 L 181 450 181 440.700 C 181 434.800, 180.561 430.961, 179.800 430.200 C 178.867 429.267, 178.867 428.733, 179.800 427.800 C 181.536 426.064, 181.489 398.028, 179.750 397.928 C 169.862 397.358, 159.665 397.698, 158.897 398.624 M 222.750 397.786 L 213 398.072 213 424.036 L 213 450 217.500 450 L 222 450 222 442 C 222 434.667, 222.167 434, 224 434 C 225.833 434, 226 434.667, 226 442 L 226 450 230.500 450 L 235 450 235 424.107 C 235 404.250, 234.709 398.131, 233.750 397.857 C 233.063 397.661, 228.113 397.629, 222.750 397.786 M 308.078 397.807 C 307.344 398.052, 307 406.449, 307 424.083 L 307 450 311 450 L 315 450 315.015 431.750 C 315.024 421.712, 315.428 412.872, 315.914 412.104 C 316.400 411.337, 317.519 410.985, 318.399 411.323 C 319.789 411.856, 320 414.441, 320 430.969 L 320 450 324.500 450 L 329 450 329 424 C 329 403.910, 328.716 397.981, 327.750 397.918 C 322.792 397.593, 308.953 397.516, 308.078 397.807 M 185.450 399.269 C 185.183 399.967, 185.084 411.554, 185.232 425.019 L 185.500 449.500 196.750 449.783 L 208 450.066 208 424.033 L 208 398 196.969 398 C 188.978 398, 185.803 398.350, 185.450 399.269 M 239.607 399.582 C 238.816 401.642, 238.816 427.358, 239.607 429.418 C 240.073 430.632, 241.700 431, 246.607 431 C 252.760 431, 253 431.094, 253 433.500 C 253 435.887, 252.731 436, 247.035 436 C 239.957 436, 238.721 437.386, 239.197 444.784 L 239.500 449.500 250.775 449.783 L 262.050 450.066 261.775 433.783 L 261.500 417.500 254.688 417.203 C 247.937 416.908, 247.879 416.882, 248.188 414.203 C 248.489 411.598, 248.744 411.489, 255.250 411.204 L 262 410.909 262 404.454 L 262 398 251.107 398 C 242.096 398, 240.109 398.273, 239.607 399.582 M 266 404.437 L 266 410.873 269.250 411.187 L 272.500 411.500 273 430.500 L 273.500 449.500 278 449.500 L 282.500 449.500 283 430.500 C 283.494 411.730, 283.527 411.496, 285.750 411.180 C 287.817 410.887, 288 410.338, 288 404.430 L 288 398 277 398 L 266 398 266 404.437 M 293 403.500 L 293 409 297.500 409 L 302 409 302 403.500 L 302 398 297.500 398 L 293 398 293 403.500 M 334.699 398.634 C 334.315 399.019, 334 410.733, 334 424.667 L 334 450 346 450 L 358 450 358 442 C 358 434.667, 358.167 434, 360 434 C 361.810 434, 362 433.333, 362 427 L 362 420 355.540 420 L 349.081 420 348.790 428.250 C 348.507 436.306, 348.441 436.500, 346 436.500 L 343.500 436.500 343.500 424 L 343.500 411.500 349.796 411.201 L 356.093 410.902 355.796 404.701 L 355.500 398.500 345.449 398.217 C 339.922 398.062, 335.084 398.249, 334.699 398.634 M 388.699 398.634 C 388.315 399.019, 388 410.749, 388 424.700 L 388 450.068 398.750 449.784 L 409.500 449.500 409.500 443.500 L 409.500 437.500 403.220 437.202 L 396.941 436.903 397.220 424.202 L 397.500 411.500 403.796 411.201 L 410.093 410.902 409.796 404.701 L 409.500 398.500 399.449 398.217 C 393.922 398.062, 389.084 398.249, 388.699 398.634 M 413.667 398.667 C 412.703 399.630, 412.875 447.254, 413.847 448.787 C 414.448 449.733, 417.420 449.998, 425.082 449.787 L 435.500 449.500 435.767 423.750 L 436.034 398 425.184 398 C 419.216 398, 414.033 398.300, 413.667 398.667 M 167.667 411.667 C 167.300 412.033, 167 414.990, 167 418.236 C 167 423.786, 167.135 424.120, 169.250 423.820 C 170.896 423.586, 171.589 422.720, 171.832 420.592 C 172.569 414.127, 170.227 409.107, 167.667 411.667 M 195 423.427 C 195 435.397, 195.097 436, 197.031 436 C 198.976 436, 199.050 435.487, 198.781 423.762 C 198.535 413.033, 198.284 411.483, 196.750 411.189 C 195.158 410.884, 195 411.991, 195 423.427 M 222.688 411.646 C 222.309 412.024, 222 414.958, 222 418.167 C 222 423.379, 222.218 424, 224.048 424 C 225.922 424, 226.070 423.478, 225.798 417.829 C 225.524 412.149, 224.406 409.927, 222.688 411.646 M 422.701 411.632 C 422.316 412.018, 422 417.658, 422 424.167 L 422 436 424.531 436 L 427.062 436 426.781 423.762 C 426.549 413.655, 426.230 411.473, 424.951 411.228 C 424.099 411.064, 423.087 411.246, 422.701 411.632 M 293 432.500 L 293 450 297.500 450 L 302 450 302 432.500 L 302 415 297.500 415 L 293 415 293 432.500 M 442 444.500 C 442 447.567, 442.310 448, 444.500 448 C 446.690 448, 447 447.567, 447 444.500 C 447 441.433, 446.690 441, 444.500 441 C 442.310 441, 442 441.433, 442 444.500"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke="url(#gradient)"
      />
    </svg>
  );
}

export default Logo;
