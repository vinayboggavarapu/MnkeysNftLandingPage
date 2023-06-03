import React from "react";

const Arrow = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={1091}
      fill="none"
      {...props}
    >
      <path
        stroke="#000"
        id="arrowpath"
        strokeWidth={3}
        d="M33.5 0v84.178c0 .21-.07.42-.192.59-25.556 35.694-21.028 51.76-.535 75.881a1.005 1.005 0 0 0 1.492.041c12.08-12.866 16.168-20.927 18.85-33.329.17-.786-.623-1.432-1.367-1.126-18.658 7.675-29.927 7.167-48.438.158-.84-.318-1.658.54-1.283 1.357 9.672 21.103 16.357 32.73 31.217 49.462.163.184.256.423.256.669v84.766c0 .229-.084.457-.227.635-28.813 35.897-18.383 50.24-.394 75.35.334.467.996.568 1.432.194C47.898 327.159 56.153 301.678 52.5 304.5c-3.72 2.874-32.547 9.977-49.928.041a.499.499 0 0 0-.169-.065c-2.355-.249 13.878 31.269 30.834 49.739.17.185.263.425.263.677v83.804c0 .198-.063.398-.172.562-24.688 37.029-19.8 52.657-.508 76.891a1.003 1.003 0 0 0 1.468.108c10.75-10.223 14.937-17.785 19.182-31.957.23-.766-.496-1.474-1.26-1.24-19.838 6.087-30.304 5.251-46.295.072-.786-.255-1.534.494-1.263 1.275 7.277 21 14.35 31.654 28.614 48.812.15.179.234.409.234.643V619.2c0 .196-.06.392-.169.556-21.916 33.296-19.878 49.472 1.423 74.377.39.456 1.105.469 1.506.021 10.91-12.199 14.992-19.388 17.424-31.063.152-.728-.53-1.351-1.246-1.151-18.668 5.214-29.632 6.626-46.211.425-.83-.311-1.648.519-1.3 1.334 7.462 17.43 14.861 28.285 28.39 47.046.117.164.185.363.19.565l1.985 85.844a1.02 1.02 0 0 1-.203.628c-22.802 30.566-21.157 46.563-.468 72.86.36.458 1.046.517 1.47.116 10.103-9.589 13.91-17.023 17.287-31.417.184-.78-.59-1.444-1.34-1.159-19.57 7.452-30.15 6.961-45.832.36-.846-.356-1.706.509-1.325 1.344 9.55 20.912 16.686 31.847 30.204 49.336.138.178.214.4.212.625L33.5 1090.5"
      />
    </svg>
  );
};

export default Arrow;